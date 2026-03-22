// Основні типи даних

export interface Team {
  id: string;
  name: string;
  color: string;
}

export interface Player {
  id: string;
  name: string;
}

export interface Goal {
  id: string;
  playerId: string;
  teamId: string;
  minute?: number;
}

export interface Match {
  id: string;
  gameDayId: string;
  team1Id: string;
  team2Id: string;
  score1: number;
  score2: number;
  goals: Goal[];
  timestamp: number;
}

export interface PlayerTeamAssignment {
  playerId: string;
  teamId: string;
  // Для трекінгу трансферів під час дня
  transfers?: {
    fromTeamId: string;
    toTeamId: string;
    timestamp: number;
  }[];
}

export interface GameDay {
  id: string;
  date: string;
  name: string;
  playerTeamAssignments: PlayerTeamAssignment[];
  matches: Match[];
  isActive: boolean; // чи це поточний активний день
}

// Статистика команди (за один ігровий день)
export interface TeamDayStats {
  teamId: string;
  teamName: string;
  teamColor: string;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

// Статистика гравця (за весь час)
export interface PlayerStats {
  playerId: string;
  playerName: string;
  
  // Базові показники
  totalGoals: number;
  totalMatches: number;
  gameDaysPlayed: number;
  goalsByTeam: {
    [teamId: string]: number;
  };
  
  // Результати матчів
  wins: number;
  draws: number;
  losses: number;
  
  // Командні показники (коли гравець на полі)
  teamGoalsFor: number;      // Забито командою
  teamGoalsAgainst: number;  // Пропущено командою
  
  // Розраховані коефіцієнти
  goalsPerMatch: number;     // Голів за матч
  goalsPerGameDay: number;   // Голів за ігровий день
  winRate: number;           // % перемог
  points: number;            // Очки (3 за перемогу, 1 за нічию)
  pointsPerMatch: number;    // Очків за матч
  goalDifference: number;    // Різниця голів команди
  cleanSheets: number;       // Сухі матчі (0 пропущено)
}


