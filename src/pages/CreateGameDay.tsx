import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import {
  Container,
  Title,
  Card,
  Button,
  Input,
  Label,
  FormGroup,
  Select,
  MobileStack,
  ButtonGroup,
  PageHeader,
} from '@/components/UI';
import styled, { keyframes } from 'styled-components';

// Animation for player cards
const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Player assignment row
const PlayerAssignment = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 10px;
  animation: ${slideIn} 0.2s ease;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderLight};
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

// Team section container
const TeamSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

// Team header badge
const TeamHeader = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 10px 16px;
  background: ${({ $color }) => $color};
  color: white;
  font-weight: 700;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 2px 8px ${({ $color }) => `${$color}50`};
  font-family: ${({ theme }) => theme.typography.heading};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

// Player count in header
const PlayerCountBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`;

// No players message
const NoPlayers = styled.p`
  color: ${({ theme }) => theme.colors.text.disabled};
  font-size: 14px;
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px dashed ${({ theme }) => theme.colors.border};
`;

// Info text below labels
const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 13px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

// Progress indicator
const ProgressBar = styled.div<{ $percentage: number }>`
  height: 4px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ $percentage }) => $percentage}%;
    background: ${({ theme }) => theme.colors.gradients.primary};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
`;

// Form card
const FormCard = styled(Card)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CreateGameDay: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { players, teams, addGameDay, updateGameDay, getGameDay } = useApp();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const isEditMode = !!id;
  const existingGameDay = id ? getGameDay(id) : undefined;

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Form state
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [playerAssignments, setPlayerAssignments] = useState<
    { playerId: string; teamId: string }[]
  >([]);

  // Load existing data in edit mode
  useEffect(() => {
    if (isEditMode && existingGameDay) {
      setName(existingGameDay.name);
      setDate(existingGameDay.date);
      setPlayerAssignments(
        existingGameDay.playerTeamAssignments.map(pa => ({
          playerId: pa.playerId,
          teamId: pa.teamId,
        }))
      );
    }
  }, [isEditMode, existingGameDay]);

  // Track which players are already assigned
  const assignedPlayerIds = new Set(playerAssignments.map(pa => pa.playerId));

  // Add a new player to assignments
  const handleAddPlayer = () => {
    if (teams.length === 0) return;
    
    // Find first available player
    const availablePlayer = players.find(p => !assignedPlayerIds.has(p.id));
    if (!availablePlayer) {
      alert('Всі гравці вже додані');
      return;
    }

    setPlayerAssignments([
      ...playerAssignments,
      { playerId: availablePlayer.id, teamId: teams[0].id },
    ]);
  };

  // Remove player from assignments
  const handleRemovePlayer = (index: number) => {
    setPlayerAssignments(playerAssignments.filter((_, i) => i !== index));
  };

  // Change player selection
  const handlePlayerChange = (index: number, playerId: string) => {
    // Check if player is already assigned elsewhere
    const isAlreadyAssigned = playerAssignments.some(
      (pa, i) => i !== index && pa.playerId === playerId
    );
    
    if (isAlreadyAssigned) {
      alert('Цей гравець вже доданий до іншої команди');
      return;
    }

    const updated = [...playerAssignments];
    updated[index].playerId = playerId;
    setPlayerAssignments(updated);
  };

  // Change team for a player
  const handleTeamChange = (index: number, teamId: string) => {
    const updated = [...playerAssignments];
    updated[index].teamId = teamId;
    setPlayerAssignments(updated);
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Будь ласка, введіть назву ігрового дня');
      return;
    }

    if (isEditMode && id) {
      // Update existing game day
      await updateGameDay(id, {
        name: name.trim(),
        date,
        playerTeamAssignments: playerAssignments.map(pa => ({
          playerId: pa.playerId,
          teamId: pa.teamId,
        })),
      });
      navigate(`/game-day/${id}`);
    } else {
      // Create new game day
      const gameDay = await addGameDay({
        name: name.trim(),
        date,
        playerTeamAssignments: playerAssignments.map(pa => ({
          playerId: pa.playerId,
          teamId: pa.teamId,
        })),
        matches: [],
        isActive: false,
      });
      navigate(`/game-day/${gameDay.id}`);
    }
  };

  // Group players by team for display
  const playersByTeam = teams.map(team => ({
    team,
    players: playerAssignments
      .map((pa, index) => ({ ...pa, index }))
      .filter(pa => pa.teamId === team.id),
  }));

  const availablePlayersCount = players.length - assignedPlayerIds.size;
  const assignmentPercentage = players.length > 0 
    ? (playerAssignments.length / players.length) * 100 
    : 0;

  return (
    <Container>
      <PageHeader>
        <Title style={{ margin: 0 }}>
          {isEditMode ? '✏️ Редагувати ігровий день' : '🆕 Створити ігровий день'}
        </Title>
      </PageHeader>

      <FormCard>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Назва</Label>
            <Input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Наприклад: Гра 15 грудня"
              autoFocus
            />
          </FormGroup>

          <FormGroup>
            <Label>Дата</Label>
            <Input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <MobileStack>
              <div style={{ flex: 1 }}>
                <Label style={{ margin: 0 }}>👥 Гравці та команди</Label>
                <InfoText>
                  Додано: {playerAssignments.length} з {players.length} гравців
                </InfoText>
                <ProgressBar $percentage={assignmentPercentage} />
              </div>
              <Button 
                type="button" 
                onClick={handleAddPlayer}
                disabled={availablePlayersCount === 0}
              >
                + Додати гравця
              </Button>
            </MobileStack>
          </FormGroup>

          {players.length === 0 && (
            <NoPlayers>
              ⚠️ Спочатку додайте гравців у розділі "Гравці"
            </NoPlayers>
          )}

          {playersByTeam.map(({ team, players: teamPlayers }) => (
            <TeamSection key={team.id}>
              <TeamHeader $color={team.color}>
                {team.name}
                <PlayerCountBadge>{teamPlayers.length}</PlayerCountBadge>
              </TeamHeader>
              {teamPlayers.length === 0 ? (
                <NoPlayers>Немає гравців у цій команді</NoPlayers>
              ) : (
                teamPlayers.map(pa => (
                  <PlayerAssignment key={pa.index}>
                    <Select
                      value={pa.playerId}
                      onChange={e => handlePlayerChange(pa.index, e.target.value)}
                      style={{ flex: 2 }}
                    >
                      {players.map(player => {
                        const isAssignedElsewhere = 
                          assignedPlayerIds.has(player.id) && 
                          player.id !== pa.playerId;
                        return (
                          <option 
                            key={player.id} 
                            value={player.id}
                            disabled={isAssignedElsewhere}
                          >
                            {player.name}{isAssignedElsewhere ? ' (вже додано)' : ''}
                          </option>
                        );
                      })}
                    </Select>
                    <Select
                      value={pa.teamId}
                      onChange={e => handleTeamChange(pa.index, e.target.value)}
                      style={{ flex: 1 }}
                    >
                      {teams.map(team => (
                        <option key={team.id} value={team.id}>
                          {team.name}
                        </option>
                      ))}
                    </Select>
                    <Button
                      type="button"
                      $variant="danger"
                      $size="sm"
                      onClick={() => handleRemovePlayer(pa.index)}
                    >
                      ✕
                    </Button>
                  </PlayerAssignment>
                ))
              )}
            </TeamSection>
          ))}

          <ButtonGroup style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border, #2d3d4f)' }}>
            <Button type="submit">
              {isEditMode ? '✓ Зберегти зміни' : '+ Створити ігровий день'}
            </Button>
            <Button
              type="button"
              $variant="ghost"
              onClick={() => navigate(isEditMode ? `/game-day/${id}` : '/')}
            >
              Скасувати
            </Button>
          </ButtonGroup>
        </form>
      </FormCard>
    </Container>
  );
};
