import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import {
  Container,
  Title,
  Subtitle,
  Card,
  Button,
  Table,
  Th,
  Td,
  Tr,
  Badge,
  Select,
  Label,
  FormGroup,
  EmptyState,
  TableWrapper,
  ButtonGroup,
  MobileStack,
  PageHeader,
} from '@/components/UI';
import styled, { keyframes } from 'styled-components';
import { Goal, Match } from '@/types';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scoreReveal = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`;

// Team badge with color and shadow
const TeamBadge = styled.div<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ $color }) => $color};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px ${({ $color }) => `${$color}50`};
  font-family: ${({ theme }) => theme.typography.heading};

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`;

// Large score display
const ScoreDisplay = styled.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  min-width: 80px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.heading};
  letter-spacing: -0.02em;
  animation: ${scoreReveal} 0.5s ease;

  @media (max-width: 480px) {
    font-size: 24px;
    min-width: 60px;
  }
`;

const ScoreSeparator = styled.span`
  color: ${({ theme }) => theme.colors.text.disabled};
  margin: 0 4px;
`;

// Match card with subtle styling
const MatchCard = styled(Card)<{ $index?: number }>`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeIn} 0.3s ease forwards;
  animation-delay: ${({ $index }) => ($index || 0) * 0.05}s;
  opacity: 0;
`;

const MatchNumber = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

const MatchContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const MatchTeams = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing.sm};
    flex-wrap: wrap;
    justify-content: center;
  }
`;

// Goals list under match
const GoalsList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  strong {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const GoalItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚽';
    font-size: 12px;
  }
`;

// Form styling
const FormCard = styled(Card)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  animation: ${fadeIn} 0.3s ease;
`;

const GoalInputRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

const GoalCount = styled.input`
  width: 60px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text.primary};
  -webkit-appearance: none;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ScoreInput = styled.input`
  width: 100%;
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.heading};
  -webkit-appearance: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ValidationError = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚠️';
    font-size: 12px;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

// Modal overlay
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.md};
  animation: ${fadeIn} 0.2s ease;
`;

const ModalContent = styled(Card)`
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${fadeIn} 0.3s ease;
`;

const GoalRowActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;

// Date display
const DateBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
  
  &::before {
    content: '📅';
  }
`;

// Standings table row highlighting
const StandingsRow = styled(Tr)<{ $rank: number }>`
  ${({ $rank, theme }) => $rank === 1 && `
    background: ${theme.colors.primaryLight};
    
    td:first-child {
      position: relative;
      
      &::before {
        content: '👑';
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
      }
    }
  `}
`;

const PointsBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
`;

interface PlayerGoalInput {
  playerId: string;
  teamId: string;
  goals: string;
}

export const GameDayView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {
    getGameDay,
    teams,
    players,
    addMatch,
    updateMatch,
    deleteMatch,
    getTeamDayStats,
    transferPlayer,
  } = useApp();

  // Form state
  const [showAddMatch, setShowAddMatch] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);

  const [team1Id, setTeam1Id] = useState('');
  const [team2Id, setTeam2Id] = useState('');
  const [score1Input, setScore1Input] = useState('0');
  const [score2Input, setScore2Input] = useState('0');
  const [playerGoals, setPlayerGoals] = useState<PlayerGoalInput[]>([]);

  const [transferPlayerId, setTransferPlayerId] = useState('');
  const [transferFromTeamId, setTransferFromTeamId] = useState('');
  const [transferToTeamId, setTransferToTeamId] = useState('');

  const gameDay = getGameDay(id || '');

  // Set default teams when component loads
  useEffect(() => {
    if (teams.length >= 2 && !team1Id && !team2Id) {
      setTeam1Id(teams[0].id);
      setTeam2Id(teams[1].id);
    }
  }, [teams, team1Id, team2Id]);

  // Prevent selecting same team for both sides
  useEffect(() => {
    if (team1Id && team1Id === team2Id) {
      const differentTeam = teams.find(t => t.id !== team1Id);
      if (differentTeam) {
        setTeam2Id(differentTeam.id);
      }
    }
  }, [team1Id, team2Id, teams]);

  // Auto-select "from team" for transfers
  useEffect(() => {
    if (transferPlayerId && gameDay) {
      const assignment = gameDay.playerTeamAssignments.find(
        pa => pa.playerId === transferPlayerId
      );
      if (assignment) {
        setTransferFromTeamId(assignment.teamId);
        if (transferToTeamId === assignment.teamId) {
          setTransferToTeamId('');
        }
      }
    }
  }, [transferPlayerId, gameDay, transferToTeamId]);

  // Show not found message if game day doesn't exist
  if (!gameDay) {
    return (
      <Container>
        <Card $variant="glow">
          <EmptyState>
            <p>Ігровий день не знайдено</p>
          </EmptyState>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <Button onClick={() => navigate('/')}>← Назад до списку</Button>
          </div>
        </Card>
      </Container>
    );
  }

  const stats = getTeamDayStats(gameDay.id);

  // Helper functions
  const getTeamName = (teamId: string) =>
    teams.find(t => t.id === teamId)?.name || '?';

  const getTeamColor = (teamId: string) =>
    teams.find(t => t.id === teamId)?.color || '#64748b';

  const getPlayerName = (playerId: string) =>
    players.find(p => p.id === playerId)?.name || '?';

  const getPlayersForTeam = (teamId: string) => {
    return gameDay.playerTeamAssignments
      .filter(pa => pa.teamId === teamId)
      .map(pa => players.find(p => p.id === pa.playerId))
      .filter(Boolean);
  };

  const getAvailableTeamsForTeam2 = () => {
    return teams.filter(t => t.id !== team1Id);
  };

  const getAvailableTeamsForTransfer = () => {
    return teams.filter(t => t.id !== transferFromTeamId);
  };

  const parseScore = (value: string): number => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
  };

  const parseGoals = (value: string): number => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
  };

  const getTotalPlayerGoalsForTeam = (teamId: string): number => {
    return playerGoals
      .filter(pg => pg.teamId === teamId)
      .reduce((sum, pg) => sum + parseGoals(pg.goals), 0);
  };

  // Validation
  const score1 = parseScore(score1Input);
  const score2 = parseScore(score2Input);
  const team1PlayerGoals = getTotalPlayerGoalsForTeam(team1Id);
  const team2PlayerGoals = getTotalPlayerGoalsForTeam(team2Id);
  
  const team1GoalsExceeded = team1PlayerGoals > score1;
  const team2GoalsExceeded = team2PlayerGoals > score2;
  const hasValidationErrors = team1GoalsExceeded || team2GoalsExceeded;

  // Form handlers
  const handleAddPlayerGoal = (teamId: string) => {
    const teamPlayers = getPlayersForTeam(teamId);
    if (teamPlayers.length > 0) {
      setPlayerGoals([
        ...playerGoals,
        {
          playerId: teamPlayers[0]!.id,
          teamId,
          goals: '1',
        },
      ]);
    }
  };

  const handleRemovePlayerGoal = (index: number) => {
    setPlayerGoals(playerGoals.filter((_, i) => i !== index));
  };

  const handlePlayerGoalChange = (
    index: number,
    field: 'playerId' | 'goals',
    value: string
  ) => {
    const updated = [...playerGoals];
    if (field === 'playerId') {
      updated[index].playerId = value;
    } else {
      if (value === '' || /^\d+$/.test(value)) {
        updated[index].goals = value;
      }
    }
    setPlayerGoals(updated);
  };

  const resetForm = () => {
    setScore1Input('0');
    setScore2Input('0');
    setPlayerGoals([]);
    setShowAddMatch(false);
    setEditingMatchId(null);
    if (teams.length >= 2) {
      setTeam1Id(teams[0].id);
      setTeam2Id(teams[1].id);
    }
  };

  const handleSaveMatch = async () => {
    if (team1Id === team2Id) {
      alert('Виберіть різні команди');
      return;
    }

    if (hasValidationErrors) {
      alert('Кількість голів гравців перевищує загальний рахунок команди');
      return;
    }

    const goals: Omit<Goal, 'id'>[] = [];
    playerGoals.forEach(pg => {
      const goalCount = parseGoals(pg.goals);
      for (let i = 0; i < goalCount; i++) {
        goals.push({
          playerId: pg.playerId,
          teamId: pg.teamId,
        });
      }
    });

    if (editingMatchId) {
      await updateMatch(gameDay.id, editingMatchId, {
        team1Id,
        team2Id,
        score1,
        score2,
        goals: goals.map(g => ({ ...g, id: Date.now().toString() + Math.random() })),
      });
    } else {
      await addMatch(gameDay.id, {
        team1Id,
        team2Id,
        score1,
        score2,
        goals: goals.map(g => ({ ...g, id: Date.now().toString() + Math.random() })),
        timestamp: Date.now(),
      });
    }

    resetForm();
  };

  const handleEditMatch = (match: Match) => {
    setEditingMatchId(match.id);
    setTeam1Id(match.team1Id);
    setTeam2Id(match.team2Id);
    setScore1Input(match.score1.toString());
    setScore2Input(match.score2.toString());

    const goalsMap = new Map<string, { playerId: string; teamId: string; count: number }>();
    match.goals.forEach(goal => {
      const key = `${goal.playerId}-${goal.teamId}`;
      if (goalsMap.has(key)) {
        goalsMap.get(key)!.count++;
      } else {
        goalsMap.set(key, {
          playerId: goal.playerId,
          teamId: goal.teamId,
          count: 1,
        });
      }
    });
    setPlayerGoals(
      Array.from(goalsMap.values()).map(g => ({
        playerId: g.playerId,
        teamId: g.teamId,
        goals: g.count.toString(),
      }))
    );
    setShowAddMatch(true);
  };

  const handleCancelEdit = () => {
    resetForm();
  };

  const handleTransfer = async () => {
    if (!transferPlayerId || !transferFromTeamId || !transferToTeamId) {
      alert('Заповніть всі поля');
      return;
    }

    if (transferFromTeamId === transferToTeamId) {
      alert('Виберіть різні команди');
      return;
    }

    await transferPlayer(gameDay.id, transferPlayerId, transferFromTeamId, transferToTeamId);
    setShowTransfer(false);
    setTransferPlayerId('');
    setTransferFromTeamId('');
    setTransferToTeamId('');
  };

  const groupGoalsByPlayer = (goals: Goal[]) => {
    const grouped: { [key: string]: { playerId: string; teamId: string; count: number } } = {};
    goals.forEach(goal => {
      const key = `${goal.playerId}-${goal.teamId}`;
      if (!grouped[key]) {
        grouped[key] = { playerId: goal.playerId, teamId: goal.teamId, count: 0 };
      }
      grouped[key].count++;
    });
    return Object.values(grouped);
  };

  return (
    <Container>
      <PageHeader>
        <div>
          <Title style={{ marginBottom: '8px' }}>{gameDay.name}</Title>
          <DateBadge>
            {new Date(gameDay.date).toLocaleDateString('uk-UA', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </DateBadge>
        </div>
        <HeaderActions>
          {isAuthenticated && (
            <Button $variant="secondary" onClick={() => setShowTransfer(true)}>
              🔄 Трансфер
            </Button>
          )}
          <Button $variant="ghost" onClick={() => navigate('/')}>
            ← Назад
          </Button>
        </HeaderActions>
      </PageHeader>

      {/* Standings Table */}
      <Card>
        <Subtitle>🏆 Турнірна таблиця</Subtitle>
        {stats.length === 0 ? (
          <EmptyState>
            <p>Немає даних</p>
            <p>Додайте матчі, щоб побачити таблицю</p>
          </EmptyState>
        ) : (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <Th style={{ width: '50px' }}>#</Th>
                  <Th>Команда</Th>
                  <Th style={{ textAlign: 'center' }}>І</Th>
                  <Th style={{ textAlign: 'center' }}>В</Th>
                  <Th style={{ textAlign: 'center' }}>Н</Th>
                  <Th style={{ textAlign: 'center' }}>П</Th>
                  <Th style={{ textAlign: 'center' }}>ЗГ</Th>
                  <Th style={{ textAlign: 'center' }}>ПГ</Th>
                  <Th style={{ textAlign: 'center' }}>РГ</Th>
                  <Th style={{ textAlign: 'center' }}>О</Th>
                </tr>
              </thead>
              <tbody>
                {stats.map((team, index) => (
                  <StandingsRow key={team.teamId} $rank={index + 1}>
                    <Td style={{ fontWeight: 600 }}>{index + 1}</Td>
                    <Td>
                      <TeamBadge $color={team.teamColor}>{team.teamName}</TeamBadge>
                    </Td>
                    <Td style={{ textAlign: 'center' }}>{team.matchesPlayed}</Td>
                    <Td style={{ textAlign: 'center', color: '#22c55e', fontWeight: 600 }}>{team.wins}</Td>
                    <Td style={{ textAlign: 'center' }}>{team.draws}</Td>
                    <Td style={{ textAlign: 'center', color: '#ef4444' }}>{team.losses}</Td>
                    <Td style={{ textAlign: 'center' }}>{team.goalsFor}</Td>
                    <Td style={{ textAlign: 'center' }}>{team.goalsAgainst}</Td>
                    <Td style={{ textAlign: 'center', fontWeight: 600 }}>
                      {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                    </Td>
                    <Td style={{ textAlign: 'center' }}>
                      <PointsBadge>{team.points}</PointsBadge>
                    </Td>
                  </StandingsRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </Card>

      {/* Matches Section */}
      <Card>
        <MobileStack style={{ marginBottom: '20px' }}>
          <Subtitle style={{ margin: 0, flex: 1 }}>⚽ Матчі</Subtitle>
          {isAuthenticated && !showAddMatch && (
            <Button onClick={() => setShowAddMatch(true)}>+ Додати матч</Button>
          )}
        </MobileStack>

        {/* Add/Edit Match Form */}
        {isAuthenticated && showAddMatch && (
          <FormCard>
            <Subtitle style={{ fontSize: '16px', marginBottom: '20px' }}>
              {editingMatchId ? '✏️ Редагування матчу' : '🆕 Новий матч'}
            </Subtitle>

            <MobileStack style={{ marginBottom: '20px' }}>
              <FormGroup style={{ flex: 1, margin: 0 }}>
                <Label>Команда 1</Label>
                <Select value={team1Id} onChange={e => setTeam1Id(e.target.value)}>
                  {teams.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup style={{ flex: 1, margin: 0 }}>
                <Label>Команда 2</Label>
                <Select value={team2Id} onChange={e => setTeam2Id(e.target.value)}>
                  {getAvailableTeamsForTeam2().map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </MobileStack>

            <MobileStack style={{ marginBottom: '20px' }}>
              <FormGroup style={{ flex: 1, margin: 0 }}>
                <Label>Рахунок {getTeamName(team1Id)}</Label>
                <ScoreInput
                  type="text"
                  inputMode="numeric"
                  value={score1Input}
                  onChange={e => {
                    const value = e.target.value;
                    if (value === '' || /^\d+$/.test(value)) {
                      setScore1Input(value);
                    }
                  }}
                  onBlur={() => {
                    if (score1Input === '') {
                      setScore1Input('0');
                    }
                  }}
                />
                {team1GoalsExceeded && (
                  <ValidationError>
                    Голів ({team1PlayerGoals}) більше ніж рахунок ({score1})
                  </ValidationError>
                )}
              </FormGroup>

              <FormGroup style={{ flex: 1, margin: 0 }}>
                <Label>Рахунок {getTeamName(team2Id)}</Label>
                <ScoreInput
                  type="text"
                  inputMode="numeric"
                  value={score2Input}
                  onChange={e => {
                    const value = e.target.value;
                    if (value === '' || /^\d+$/.test(value)) {
                      setScore2Input(value);
                    }
                  }}
                  onBlur={() => {
                    if (score2Input === '') {
                      setScore2Input('0');
                    }
                  }}
                />
                {team2GoalsExceeded && (
                  <ValidationError>
                    Голів ({team2PlayerGoals}) більше ніж рахунок ({score2})
                  </ValidationError>
                )}
              </FormGroup>
            </MobileStack>

            <FormGroup>
              <Label>Голи гравців (необов'язково)</Label>
              <ButtonGroup>
                <Button 
                  type="button" 
                  $variant="secondary"
                  $size="sm"
                  onClick={() => handleAddPlayerGoal(team1Id)}
                >
                  + {getTeamName(team1Id)}
                </Button>
                <Button 
                  type="button" 
                  $variant="secondary"
                  $size="sm"
                  onClick={() => handleAddPlayerGoal(team2Id)}
                >
                  + {getTeamName(team2Id)}
                </Button>
              </ButtonGroup>
            </FormGroup>

            {playerGoals.map((pg, index) => (
              <GoalInputRow key={index}>
                <Select
                  value={pg.playerId}
                  onChange={e => handlePlayerGoalChange(index, 'playerId', e.target.value)}
                  style={{ flex: 1 }}
                >
                  {getPlayersForTeam(pg.teamId).map(player => (
                    <option key={player!.id} value={player!.id}>
                      {player!.name}
                    </option>
                  ))}
                </Select>
                <GoalRowActions>
                  <Badge $color={getTeamColor(pg.teamId)}>{getTeamName(pg.teamId)}</Badge>
                  <GoalCount
                    type="text"
                    inputMode="numeric"
                    value={pg.goals}
                    onChange={e => handlePlayerGoalChange(index, 'goals', e.target.value)}
                    onBlur={() => {
                      if (pg.goals === '') {
                        handlePlayerGoalChange(index, 'goals', '0');
                      }
                    }}
                  />
                  <Button $variant="danger" $size="sm" onClick={() => handleRemovePlayerGoal(index)}>
                    ✕
                  </Button>
                </GoalRowActions>
              </GoalInputRow>
            ))}

            <ButtonGroup style={{ marginTop: '20px' }}>
              <Button onClick={handleSaveMatch} disabled={hasValidationErrors}>
                {editingMatchId ? '✓ Зберегти' : '+ Додати'}
              </Button>
              <Button $variant="ghost" onClick={handleCancelEdit}>
                Скасувати
              </Button>
            </ButtonGroup>
          </FormCard>
        )}

        {/* Matches List */}
        {gameDay.matches.length === 0 ? (
          <EmptyState>
            <p>Ще немає матчів</p>
            <p>Додайте перший матч, щоб почати</p>
          </EmptyState>
        ) : (
          gameDay.matches.map((match, index) => (
            <MatchCard key={match.id} $index={index}>
              <MatchNumber>Матч #{index + 1}</MatchNumber>
              <MatchContent>
                <MatchTeams>
                  <TeamBadge $color={getTeamColor(match.team1Id)}>
                    {getTeamName(match.team1Id)}
                  </TeamBadge>
                  <ScoreDisplay>
                    {match.score1}
                    <ScoreSeparator>:</ScoreSeparator>
                    {match.score2}
                  </ScoreDisplay>
                  <TeamBadge $color={getTeamColor(match.team2Id)}>
                    {getTeamName(match.team2Id)}
                  </TeamBadge>
                </MatchTeams>
                {isAuthenticated && (
                  <ButtonGroup>
                    <Button
                      $variant="secondary"
                      $size="sm"
                      onClick={() => handleEditMatch(match)}
                      disabled={editingMatchId === match.id}
                    >
                      ✎ Редагувати
                    </Button>
                    <Button
                      $variant="danger"
                      $size="sm"
                      onClick={async () => {
                        if (window.confirm('Видалити цей матч?')) {
                          await deleteMatch(gameDay.id, match.id);
                        }
                      }}
                    >
                      ✕
                    </Button>
                  </ButtonGroup>
                )}
              </MatchContent>

              {match.goals.length > 0 && (
                <GoalsList>
                  <strong>Голи: </strong>
                  {groupGoalsByPlayer(match.goals).map((goalInfo, idx, arr) => (
                    <GoalItem key={idx}>
                      {getPlayerName(goalInfo.playerId)}
                      {goalInfo.count > 1 && ` ×${goalInfo.count}`}
                      {idx < arr.length - 1 && ', '}
                    </GoalItem>
                  ))}
                </GoalsList>
              )}
            </MatchCard>
          ))
        )}
      </Card>

      {/* Transfer Modal */}
      {isAuthenticated && showTransfer && (
        <Modal onClick={() => setShowTransfer(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Subtitle>🔄 Трансфер гравця</Subtitle>

            <FormGroup>
              <Label>Гравець</Label>
              <Select
                value={transferPlayerId}
                onChange={e => setTransferPlayerId(e.target.value)}
              >
                <option value="">Виберіть гравця</option>
                {gameDay.playerTeamAssignments.map(pa => {
                  const player = players.find(p => p.id === pa.playerId);
                  const team = teams.find(t => t.id === pa.teamId);
                  return (
                    <option key={pa.playerId} value={pa.playerId}>
                      {player?.name} ({team?.name})
                    </option>
                  );
                })}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>З команди</Label>
              <Select
                value={transferFromTeamId}
                disabled={true}
                style={{ opacity: 0.7 }}
              >
                <option value="">
                  {transferFromTeamId
                    ? getTeamName(transferFromTeamId)
                    : 'Автоматично'}
                </option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>До команди</Label>
              <Select
                value={transferToTeamId}
                onChange={e => setTransferToTeamId(e.target.value)}
                disabled={!transferFromTeamId}
              >
                <option value="">Виберіть команду</option>
                {getAvailableTeamsForTransfer().map(team => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <ButtonGroup>
              <Button onClick={handleTransfer} disabled={!transferToTeamId}>
                ✓ Трансфер
              </Button>
              <Button $variant="ghost" onClick={() => setShowTransfer(false)}>
                Скасувати
              </Button>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};
