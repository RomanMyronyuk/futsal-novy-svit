import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import {
  Container,
  Title,
  Subtitle,
  Card,
  Button,
  ButtonGroup,
  PageHeader,
} from '@/components/UI';
import styled, { keyframes } from 'styled-components';
import { Match } from '@/types';

// Staggered animation for cards
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Game day card with hover effects
const GameDayCard = styled(Card)<{ $index: number }>`
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  animation: ${slideIn} 0.4s ease forwards;
  animation-delay: ${({ $index }) => $index * 0.05}s;
  opacity: 0;
  
  /* Hover glow effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
    background: ${({ theme }) => theme.colors.gradients.hero};
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
    
    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    &:hover {
      transform: none;
    }
  }
`;

const GameDayHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  z-index: 1;
`;

const GameDayTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.heading};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const GameDayDate = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  z-index: 1;
  
  /* Calendar icon */
  &::before {
    content: '📅';
    font-size: 14px;
  }
`;

// Stats badges container
const GameDayStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 14px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 13px;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

// Individual stat item
const StatItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 13px;
  
  .stat-icon {
    font-size: 14px;
  }
  
  .stat-value {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const CardActions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 1;
`;

// Hero section for empty state
const HeroSection = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
  
  h2 {
    font-size: 24px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroIcon = styled.div`
  font-size: 64px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  filter: drop-shadow(0 0 30px rgba(34, 197, 94, 0.4));
`;

// Recent matches section styles
const RecentMatchesCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const MatchItem = styled.div<{ $index: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  animation: ${slideIn} 0.3s ease forwards;
  animation-delay: ${({ $index }) => $index * 0.05}s;
  opacity: 0;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const MatchTeams = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

const TeamBadge = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: ${({ $color }) => $color};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 12px;
  }
`;

const MatchScore = styled.div`
  font-size: 20px;
  font-weight: 800;
  font-family: ${({ theme }) => theme.typography.heading};
  color: ${({ theme }) => theme.colors.text.primary};
  min-width: 60px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ScoreSeparator = styled.span`
  color: ${({ theme }) => theme.colors.text.disabled};
  margin: 0 2px;
`;

const MatchMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;

  @media (max-width: 600px) {
    align-items: center;
    width: 100%;
    padding-top: ${({ theme }) => theme.spacing.sm};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const MatchDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const MatchGameDay = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.disabled};
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// Extended match type with game day info
interface MatchWithGameDay extends Match {
  gameDayName: string;
  gameDayDate: string;
}

export const GameDaysList: React.FC = () => {
  const { gameDays, teams, deleteGameDay } = useApp();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Sort game days by date, newest first
  const sortedGameDays = [...gameDays].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get all matches from all game days with game day info
  const allMatches: MatchWithGameDay[] = gameDays.flatMap(gameDay =>
    gameDay.matches.map(match => ({
      ...match,
      gameDayName: gameDay.name,
      gameDayDate: gameDay.date,
    }))
  );

  // Sort matches by timestamp (newest first) and take first 5
  const recentMatches = allMatches
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 5);

  // Helper functions
  const getTeamName = (teamId: string) =>
    teams.find(t => t.id === teamId)?.name || '?';

  const getTeamColor = (teamId: string) =>
    teams.find(t => t.id === teamId)?.color || '#64748b';

  const formatMatchDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleGameDayClick = (id: string) => {
    navigate(`/game-day/${id}`);
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm('Ви впевнені, що хочете видалити цей ігровий день?')) {
      await deleteGameDay(id);
    }
  };

  return (
    <Container>
      <PageHeader>
        <Title style={{ margin: 0 }}>Ігрові дні</Title>
        {isAuthenticated && (
          <Button onClick={() => navigate('/game-day/new')}>
            + Створити
          </Button>
        )}
      </PageHeader>

      {/* Recent matches section */}
      {recentMatches.length > 0 && (
        <RecentMatchesCard>
          <SectionTitle>
            <Subtitle style={{ margin: 0 }}>🔥 Останні матчі</Subtitle>
          </SectionTitle>
          
          {recentMatches.map((match, index) => (
            <MatchItem 
              key={match.id} 
              $index={index}
              onClick={() => navigate(`/game-day/${match.gameDayId}`)}
            >
              <MatchTeams>
                <TeamBadge $color={getTeamColor(match.team1Id)}>
                  {getTeamName(match.team1Id)}
                </TeamBadge>
                <MatchScore>
                  {match.score1}
                  <ScoreSeparator>:</ScoreSeparator>
                  {match.score2}
                </MatchScore>
                <TeamBadge $color={getTeamColor(match.team2Id)}>
                  {getTeamName(match.team2Id)}
                </TeamBadge>
              </MatchTeams>
              <MatchMeta>
                <MatchDate>{formatMatchDate(match.timestamp)}</MatchDate>
                <MatchGameDay>{match.gameDayName}</MatchGameDay>
              </MatchMeta>
            </MatchItem>
          ))}
        </RecentMatchesCard>
      )}

      {/* Game days list */}
      {sortedGameDays.length === 0 ? (
        <Card $variant="glow">
          <HeroSection>
            <HeroIcon>⚽</HeroIcon>
            <h2>Ласкаво просимо!</h2>
            <p>
              {isAuthenticated 
                ? 'Ще немає ігрових днів. Створіть перший ігровий день, щоб почати відстежувати матчі та статистику.'
                : 'Ще немає ігрових днів. Увійдіть, щоб створювати та редагувати дані.'}
            </p>
            {isAuthenticated && (
              <Button onClick={() => navigate('/game-day/new')} $size="lg">
                + Створити перший ігровий день
              </Button>
            )}
          </HeroSection>
        </Card>
      ) : (
        <>
          <Subtitle style={{ marginTop: '8px' }}>📅 Всі ігрові дні</Subtitle>
          {sortedGameDays.map((gameDay, index) => (
            <GameDayCard 
              key={gameDay.id} 
              onClick={() => handleGameDayClick(gameDay.id)}
              $index={index}
            >
              <GameDayHeader>
                <GameDayTitle>{gameDay.name}</GameDayTitle>
              </GameDayHeader>
              
              <GameDayDate>
                {new Date(gameDay.date).toLocaleDateString('uk-UA', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </GameDayDate>
              
              <GameDayStats>
                <StatItem>
                  <span className="stat-icon">🏆</span>
                  <span>Матчів:</span>
                  <span className="stat-value">{gameDay.matches.length}</span>
                </StatItem>
                <StatItem>
                  <span className="stat-icon">👥</span>
                  <span>Гравців:</span>
                  <span className="stat-value">{gameDay.playerTeamAssignments.length}</span>
                </StatItem>
              </GameDayStats>
              
            {isAuthenticated && (
              <CardActions>
                <ButtonGroup>
                  <Button
                    $variant="secondary"
                    onClick={e => {
                      e.stopPropagation();
                      navigate(`/game-day/${gameDay.id}/edit`);
                    }}
                  >
                    ✎ Редагувати
                  </Button>
                  <Button $variant="danger" onClick={e => handleDelete(e, gameDay.id)}>
                    ✕ Видалити
                  </Button>
                </ButtonGroup>
              </CardActions>
            )}
            </GameDayCard>
          ))}
        </>
      )}
    </Container>
  );
};
