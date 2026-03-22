import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  writeBatch,
} from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Team, Player, GameDay, Match, PlayerStats, TeamDayStats } from '@/types';

interface AppContextType {
  // Loading state
  isLoading: boolean;
  isFirebaseConnected: boolean;

  // Teams
  teams: Team[];
  addTeam: (team: Omit<Team, 'id'>) => Promise<void>;
  updateTeam: (id: string, team: Partial<Team>) => Promise<void>;
  deleteTeam: (id: string) => Promise<void>;

  // Players
  players: Player[];
  addPlayer: (player: Omit<Player, 'id'>) => Promise<void>;
  updatePlayer: (id: string, player: Partial<Player>) => Promise<void>;
  deletePlayer: (id: string) => Promise<void>;

  // Game Days
  gameDays: GameDay[];
  addGameDay: (gameDay: Omit<GameDay, 'id'>) => Promise<GameDay>;
  updateGameDay: (id: string, gameDay: Partial<GameDay>) => Promise<void>;
  deleteGameDay: (id: string) => Promise<void>;
  getGameDay: (id: string) => GameDay | undefined;
  setActiveGameDay: (id: string) => Promise<void>;
  getActiveGameDay: () => GameDay | undefined;

  // Matches
  addMatch: (gameDayId: string, match: Omit<Match, 'id' | 'gameDayId'>) => Promise<void>;
  updateMatch: (gameDayId: string, matchId: string, match: Partial<Match>) => Promise<void>;
  deleteMatch: (gameDayId: string, matchId: string) => Promise<void>;

  // Player transfers during game day
  transferPlayer: (gameDayId: string, playerId: string, fromTeamId: string, toTeamId: string) => Promise<void>;

  // Statistics
  getTeamDayStats: (gameDayId: string) => TeamDayStats[];
  getPlayerStats: () => PlayerStats[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'futsal-league-data';

interface StorageData {
  teams: Team[];
  players: Player[];
  gameDays: GameDay[];
}

const DEFAULT_TEAMS: Team[] = [
  { id: '1', name: 'Сині', color: '#2196F3' },
  { id: '2', name: 'Зелені', color: '#4CAF50' },
  { id: '3', name: 'Червоні', color: '#F44336' },
];

// Check if Firebase is properly configured
const isFirebaseConfigured = (): boolean => {
  try {
    return db !== null && db !== undefined;
  } catch {
    return false;
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [teams, setTeams] = useState<Team[]>(DEFAULT_TEAMS);
  const [players, setPlayers] = useState<Player[]>([]);
  const [gameDays, setGameDays] = useState<GameDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirebaseConnected, setIsFirebaseConnected] = useState(false);

  // Load data from localStorage (fallback)
  const loadFromLocalStorage = () => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const data: StorageData = JSON.parse(stored);
        setTeams(data.teams || DEFAULT_TEAMS);
        setPlayers(data.players || []);
        setGameDays(data.gameDays || []);
      } catch (e) {
        console.error('Error loading from localStorage:', e);
      }
    }
  };

  // Save to localStorage (fallback)
  const saveToLocalStorage = (data: StorageData) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  };

  // Initialize data - try Firebase first, fallback to localStorage
  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);

      if (!isFirebaseConfigured()) {
        console.log('Firebase not configured, using localStorage');
        loadFromLocalStorage();
        setIsLoading(false);
        return;
      }

      try {
        // Set up real-time listeners for Firebase collections
        const unsubTeams = onSnapshot(
          collection(db, 'teams'),
          snapshot => {
            if (snapshot.empty) {
              // Initialize default teams if empty
              initializeDefaultTeams();
            } else {
              const teamsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
              })) as Team[];
              setTeams(teamsData);
            }
            setIsFirebaseConnected(true);
          },
          error => {
            console.error('Firebase teams error:', error);
            loadFromLocalStorage();
            setIsFirebaseConnected(false);
          }
        );

        const unsubPlayers = onSnapshot(
          collection(db, 'players'),
          snapshot => {
            const playersData = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            })) as Player[];
            setPlayers(playersData);
          },
          error => {
            console.error('Firebase players error:', error);
          }
        );

        const unsubGameDays = onSnapshot(
          collection(db, 'gameDays'),
          snapshot => {
            const gameDaysData = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            })) as GameDay[];
            setGameDays(gameDaysData);
          },
          error => {
            console.error('Firebase gameDays error:', error);
          }
        );

        setIsLoading(false);

        // Cleanup subscriptions on unmount
        return () => {
          unsubTeams();
          unsubPlayers();
          unsubGameDays();
        };
      } catch (error) {
        console.error('Firebase initialization error:', error);
        loadFromLocalStorage();
        setIsFirebaseConnected(false);
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  // Save to localStorage as backup when data changes (only if not using Firebase)
  useEffect(() => {
    if (!isFirebaseConnected) {
      saveToLocalStorage({ teams, players, gameDays });
    }
  }, [teams, players, gameDays, isFirebaseConnected]);

  // Initialize default teams in Firebase
  const initializeDefaultTeams = async () => {
    if (!isFirebaseConfigured()) return;

    try {
      const batch = writeBatch(db);
      DEFAULT_TEAMS.forEach(team => {
        const teamRef = doc(db, 'teams', team.id);
        batch.set(teamRef, { name: team.name, color: team.color });
      });
      await batch.commit();
    } catch (error) {
      console.error('Error initializing default teams:', error);
    }
  };

  // Team methods
  const addTeam = async (team: Omit<Team, 'id'>) => {
    const newId = Date.now().toString();
    const newTeam: Team = { ...team, id: newId };

    if (isFirebaseConnected) {
      try {
        await setDoc(doc(db, 'teams', newId), { name: team.name, color: team.color });
      } catch (error) {
        console.error('Error adding team:', error);
        setTeams([...teams, newTeam]);
      }
    } else {
      setTeams([...teams, newTeam]);
    }
  };

  const updateTeam = async (id: string, team: Partial<Team>) => {
    if (isFirebaseConnected) {
      try {
        const teamRef = doc(db, 'teams', id);
        await setDoc(teamRef, team, { merge: true });
      } catch (error) {
        console.error('Error updating team:', error);
        setTeams(teams.map(t => (t.id === id ? { ...t, ...team } : t)));
      }
    } else {
      setTeams(teams.map(t => (t.id === id ? { ...t, ...team } : t)));
    }
  };

  const deleteTeam = async (id: string) => {
    if (isFirebaseConnected) {
      try {
        await deleteDoc(doc(db, 'teams', id));
      } catch (error) {
        console.error('Error deleting team:', error);
        setTeams(teams.filter(t => t.id !== id));
      }
    } else {
      setTeams(teams.filter(t => t.id !== id));
    }
  };

  // Player methods
  const addPlayer = async (player: Omit<Player, 'id'>) => {
    const newId = Date.now().toString();
    const newPlayer: Player = { ...player, id: newId };

    if (isFirebaseConnected) {
      try {
        await setDoc(doc(db, 'players', newId), { name: player.name });
      } catch (error) {
        console.error('Error adding player:', error);
        setPlayers([...players, newPlayer]);
      }
    } else {
      setPlayers([...players, newPlayer]);
    }
  };

  const updatePlayer = async (id: string, player: Partial<Player>) => {
    if (isFirebaseConnected) {
      try {
        const playerRef = doc(db, 'players', id);
        await setDoc(playerRef, player, { merge: true });
      } catch (error) {
        console.error('Error updating player:', error);
        setPlayers(players.map(p => (p.id === id ? { ...p, ...player } : p)));
      }
    } else {
      setPlayers(players.map(p => (p.id === id ? { ...p, ...player } : p)));
    }
  };

  const deletePlayer = async (id: string) => {
    if (isFirebaseConnected) {
      try {
        await deleteDoc(doc(db, 'players', id));
      } catch (error) {
        console.error('Error deleting player:', error);
        setPlayers(players.filter(p => p.id !== id));
      }
    } else {
      setPlayers(players.filter(p => p.id !== id));
    }
  };

  // Game Day methods
  const addGameDay = async (gameDay: Omit<GameDay, 'id'>): Promise<GameDay> => {
    const newId = Date.now().toString();
    const newGameDay: GameDay = { ...gameDay, id: newId };

    if (isFirebaseConnected) {
      try {
        await setDoc(doc(db, 'gameDays', newId), {
          name: gameDay.name,
          date: gameDay.date,
          playerTeamAssignments: gameDay.playerTeamAssignments,
          matches: gameDay.matches,
          isActive: gameDay.isActive,
        });
      } catch (error) {
        console.error('Error adding game day:', error);
        setGameDays([...gameDays, newGameDay]);
      }
    } else {
      setGameDays([...gameDays, newGameDay]);
    }

    return newGameDay;
  };

  const updateGameDay = async (id: string, gameDay: Partial<GameDay>) => {
    if (isFirebaseConnected) {
      try {
        const gameDayRef = doc(db, 'gameDays', id);
        await setDoc(gameDayRef, gameDay, { merge: true });
      } catch (error) {
        console.error('Error updating game day:', error);
        setGameDays(gameDays.map(gd => (gd.id === id ? { ...gd, ...gameDay } : gd)));
      }
    } else {
      setGameDays(gameDays.map(gd => (gd.id === id ? { ...gd, ...gameDay } : gd)));
    }
  };

  const deleteGameDay = async (id: string) => {
    if (isFirebaseConnected) {
      try {
        await deleteDoc(doc(db, 'gameDays', id));
      } catch (error) {
        console.error('Error deleting game day:', error);
        setGameDays(gameDays.filter(gd => gd.id !== id));
      }
    } else {
      setGameDays(gameDays.filter(gd => gd.id !== id));
    }
  };

  const getGameDay = (id: string) => {
    return gameDays.find(gd => gd.id === id);
  };

  const setActiveGameDay = async (id: string) => {
    if (isFirebaseConnected) {
      try {
        const batch = writeBatch(db);
        gameDays.forEach(gd => {
          const gameDayRef = doc(db, 'gameDays', gd.id);
          batch.update(gameDayRef, { isActive: gd.id === id });
        });
        await batch.commit();
      } catch (error) {
        console.error('Error setting active game day:', error);
        setGameDays(gameDays.map(gd => ({ ...gd, isActive: gd.id === id })));
      }
    } else {
      setGameDays(gameDays.map(gd => ({ ...gd, isActive: gd.id === id })));
    }
  };

  const getActiveGameDay = () => {
    return gameDays.find(gd => gd.isActive);
  };

  // Match methods
  const addMatch = async (gameDayId: string, match: Omit<Match, 'id' | 'gameDayId'>) => {
    const newMatch: Match = {
      ...match,
      id: Date.now().toString(),
      gameDayId,
    };

    const gameDay = gameDays.find(gd => gd.id === gameDayId);
    if (!gameDay) return;

    const updatedMatches = [...gameDay.matches, newMatch];

    if (isFirebaseConnected) {
      try {
        const gameDayRef = doc(db, 'gameDays', gameDayId);
        await setDoc(gameDayRef, { matches: updatedMatches }, { merge: true });
      } catch (error) {
        console.error('Error adding match:', error);
        setGameDays(
          gameDays.map(gd =>
            gd.id === gameDayId ? { ...gd, matches: updatedMatches } : gd
          )
        );
      }
    } else {
      setGameDays(
        gameDays.map(gd =>
          gd.id === gameDayId ? { ...gd, matches: updatedMatches } : gd
        )
      );
    }
  };

  const updateMatch = async (gameDayId: string, matchId: string, match: Partial<Match>) => {
    const gameDay = gameDays.find(gd => gd.id === gameDayId);
    if (!gameDay) return;

    const updatedMatches = gameDay.matches.map(m =>
      m.id === matchId ? { ...m, ...match } : m
    );

    if (isFirebaseConnected) {
      try {
        const gameDayRef = doc(db, 'gameDays', gameDayId);
        await setDoc(gameDayRef, { matches: updatedMatches }, { merge: true });
      } catch (error) {
        console.error('Error updating match:', error);
        setGameDays(
          gameDays.map(gd =>
            gd.id === gameDayId ? { ...gd, matches: updatedMatches } : gd
          )
        );
      }
    } else {
      setGameDays(
        gameDays.map(gd =>
          gd.id === gameDayId ? { ...gd, matches: updatedMatches } : gd
        )
      );
    }
  };

  const deleteMatch = async (gameDayId: string, matchId: string) => {
    const gameDay = gameDays.find(gd => gd.id === gameDayId);
    if (!gameDay) return;

    const updatedMatches = gameDay.matches.filter(m => m.id !== matchId);

    if (isFirebaseConnected) {
      try {
        const gameDayRef = doc(db, 'gameDays', gameDayId);
        await setDoc(gameDayRef, { matches: updatedMatches }, { merge: true });
      } catch (error) {
        console.error('Error deleting match:', error);
        setGameDays(
          gameDays.map(gd =>
            gd.id === gameDayId ? { ...gd, matches: updatedMatches } : gd
          )
        );
      }
    } else {
      setGameDays(
        gameDays.map(gd =>
          gd.id === gameDayId ? { ...gd, matches: updatedMatches } : gd
        )
      );
    }
  };

  // Transfer player during game day
  const transferPlayer = async (
    gameDayId: string,
    playerId: string,
    fromTeamId: string,
    toTeamId: string
  ) => {
    const gameDay = gameDays.find(gd => gd.id === gameDayId);
    if (!gameDay) return;

    const updatedAssignments = gameDay.playerTeamAssignments.map(assignment => {
      if (assignment.playerId !== playerId) return assignment;

      const transfers = assignment.transfers || [];
      return {
        ...assignment,
        teamId: toTeamId,
        transfers: [
          ...transfers,
          { fromTeamId, toTeamId, timestamp: Date.now() },
        ],
      };
    });

    if (isFirebaseConnected) {
      try {
        const gameDayRef = doc(db, 'gameDays', gameDayId);
        await setDoc(gameDayRef, { playerTeamAssignments: updatedAssignments }, { merge: true });
      } catch (error) {
        console.error('Error transferring player:', error);
        setGameDays(
          gameDays.map(gd =>
            gd.id === gameDayId ? { ...gd, playerTeamAssignments: updatedAssignments } : gd
          )
        );
      }
    } else {
      setGameDays(
        gameDays.map(gd =>
          gd.id === gameDayId ? { ...gd, playerTeamAssignments: updatedAssignments } : gd
        )
      );
    }
  };

  // Helper function to get player's team at a specific match time
  const getPlayerTeamAtTime = (
    gameDay: GameDay,
    playerId: string,
    matchTimestamp: number
  ): string | null => {
    const assignment = gameDay.playerTeamAssignments.find(pa => pa.playerId === playerId);
    if (!assignment) return null;

    // If no transfers, return current team
    if (!assignment.transfers || assignment.transfers.length === 0) {
      return assignment.teamId;
    }

    // Find the team at the time of the match
    // Start with the first team (before any transfers)
    let currentTeam = assignment.transfers[0].fromTeamId;

    for (const transfer of assignment.transfers) {
      if (transfer.timestamp <= matchTimestamp) {
        currentTeam = transfer.toTeamId;
      } else {
        break;
      }
    }

    return currentTeam;
  };

  // Calculate team stats for a specific game day
  const getTeamDayStats = (gameDayId: string): TeamDayStats[] => {
    const gameDay = gameDays.find(gd => gd.id === gameDayId);
    if (!gameDay) return [];

    const statsMap = new Map<string, TeamDayStats>();

    // Initialize stats for all teams
    teams.forEach(team => {
      statsMap.set(team.id, {
        teamId: team.id,
        teamName: team.name,
        teamColor: team.color,
        matchesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0,
      });
    });

    // Calculate stats from matches
    gameDay.matches.forEach(match => {
      const team1Stats = statsMap.get(match.team1Id);
      const team2Stats = statsMap.get(match.team2Id);

      if (!team1Stats || !team2Stats) return;

      team1Stats.matchesPlayed++;
      team2Stats.matchesPlayed++;

      team1Stats.goalsFor += match.score1;
      team1Stats.goalsAgainst += match.score2;
      team2Stats.goalsFor += match.score2;
      team2Stats.goalsAgainst += match.score1;

      if (match.score1 > match.score2) {
        team1Stats.wins++;
        team1Stats.points += 3;
        team2Stats.losses++;
      } else if (match.score1 < match.score2) {
        team2Stats.wins++;
        team2Stats.points += 3;
        team1Stats.losses++;
      } else {
        team1Stats.draws++;
        team2Stats.draws++;
        team1Stats.points += 1;
        team2Stats.points += 1;
      }

      team1Stats.goalDifference = team1Stats.goalsFor - team1Stats.goalsAgainst;
      team2Stats.goalDifference = team2Stats.goalsFor - team2Stats.goalsAgainst;
    });

    // Sort by points, then goal difference, then goals scored
    return Array.from(statsMap.values()).sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference)
        return b.goalDifference - a.goalDifference;
      return b.goalsFor - a.goalsFor;
    });
  };

  // Calculate player stats across all game days
  const getPlayerStats = (): PlayerStats[] => {
    const statsMap = new Map<string, PlayerStats>();

    // Initialize stats for all players
    players.forEach(player => {
      statsMap.set(player.id, {
        playerId: player.id,
        playerName: player.name,
        totalGoals: 0,
        totalMatches: 0,
        gameDaysPlayed: 0,
        goalsByTeam: {},
        wins: 0,
        draws: 0,
        losses: 0,
        teamGoalsFor: 0,
        teamGoalsAgainst: 0,
        goalsPerMatch: 0,
        goalsPerGameDay: 0,
        winRate: 0,
        points: 0,
        pointsPerMatch: 0,
        goalDifference: 0,
        cleanSheets: 0,
      });
    });

    // Calculate stats from all game days
    gameDays.forEach(gameDay => {
      // Track which players participated in this game day
      const playerParticipated = new Set<string>();

      gameDay.matches.forEach(match => {
        // For each match, find which players were in each team at the time of the match
        gameDay.playerTeamAssignments.forEach(assignment => {
          const playerTeam = getPlayerTeamAtTime(gameDay, assignment.playerId, match.timestamp);
          const playerStats = statsMap.get(assignment.playerId);
          
          if (!playerStats) return;

          // Check if player was in one of the teams playing this match
          if (playerTeam === match.team1Id || playerTeam === match.team2Id) {
            playerParticipated.add(assignment.playerId);
            playerStats.totalMatches++;
            
            // Determine if player's team won, lost, or drew
            const isTeam1 = playerTeam === match.team1Id;
            const playerTeamGoals = isTeam1 ? match.score1 : match.score2;
            const opponentGoals = isTeam1 ? match.score2 : match.score1;
            
            // Team goals tracking
            playerStats.teamGoalsFor += playerTeamGoals;
            playerStats.teamGoalsAgainst += opponentGoals;
            
            // Clean sheet (no goals conceded)
            if (opponentGoals === 0) {
              playerStats.cleanSheets++;
            }
            
            // Win/Draw/Loss
            if (playerTeamGoals > opponentGoals) {
              playerStats.wins++;
              playerStats.points += 3;
            } else if (playerTeamGoals < opponentGoals) {
              playerStats.losses++;
            } else {
              playerStats.draws++;
              playerStats.points += 1;
            }
          }
        });

        // Count goals
        match.goals.forEach(goal => {
          const playerStats = statsMap.get(goal.playerId);
          if (playerStats) {
            playerStats.totalGoals++;

            if (!playerStats.goalsByTeam[goal.teamId]) {
              playerStats.goalsByTeam[goal.teamId] = 0;
            }
            playerStats.goalsByTeam[goal.teamId]++;
          }
        });
      });

      // Update game day participation count
      playerParticipated.forEach(playerId => {
        const playerStats = statsMap.get(playerId);
        if (playerStats) {
          playerStats.gameDaysPlayed++;
        }
      });
    });

    // Calculate derived statistics
    statsMap.forEach(stats => {
      // Goals per match
      stats.goalsPerMatch = stats.totalMatches > 0 
        ? Math.round((stats.totalGoals / stats.totalMatches) * 100) / 100 
        : 0;
      
      // Goals per game day
      stats.goalsPerGameDay = stats.gameDaysPlayed > 0 
        ? Math.round((stats.totalGoals / stats.gameDaysPlayed) * 100) / 100 
        : 0;
      
      // Win rate percentage
      stats.winRate = stats.totalMatches > 0 
        ? Math.round((stats.wins / stats.totalMatches) * 100) 
        : 0;
      
      // Points per match
      stats.pointsPerMatch = stats.totalMatches > 0 
        ? Math.round((stats.points / stats.totalMatches) * 100) / 100 
        : 0;
      
      // Goal difference
      stats.goalDifference = stats.teamGoalsFor - stats.teamGoalsAgainst;
    });

    // Sort by total goals, then by win rate, then by matches played
    return Array.from(statsMap.values()).sort((a, b) => {
      if (b.totalGoals !== a.totalGoals) return b.totalGoals - a.totalGoals;
      if (b.winRate !== a.winRate) return b.winRate - a.winRate;
      return b.totalMatches - a.totalMatches;
    });
  };

  const value: AppContextType = {
    isLoading,
    isFirebaseConnected,
    teams,
    addTeam,
    updateTeam,
    deleteTeam,
    players,
    addPlayer,
    updatePlayer,
    deletePlayer,
    gameDays,
    addGameDay,
    updateGameDay,
    deleteGameDay,
    getGameDay,
    setActiveGameDay,
    getActiveGameDay,
    addMatch,
    updateMatch,
    deleteMatch,
    transferPlayer,
    getTeamDayStats,
    getPlayerStats,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
