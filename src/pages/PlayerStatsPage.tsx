import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  Container,
  Title,
  Card,
  Table,
  Th,
  Td,
  Tr,
  EmptyState,
  Badge,
  TableWrapper,
  PageHeader,
} from '@/components/UI';
import styled, { keyframes, css } from 'styled-components';

// Pulse animation for top scorer
const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
`;

// Goals badges container
const GoalsBadges = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

// Stat number with color
const StatNumber = styled.span<{ $variant?: 'goals' | 'matches' | 'wins' | 'losses' | 'default'; $size?: 'sm' | 'md' }>`
  font-size: ${({ $size }) => $size === 'sm' ? '14px' : '18px'};
  font-weight: 700;
  font-family: ${({ theme }) => theme.typography.heading};
  
  color: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'goals': return theme.colors.primary;
      case 'matches': return theme.colors.info;
      case 'wins': return theme.colors.success;
      case 'losses': return theme.colors.error;
      default: return theme.colors.text.primary;
    }
  }};

  @media (max-width: 480px) {
    font-size: ${({ $size }) => $size === 'sm' ? '12px' : '16px'};
  }
`;

// Player row with ranking
const RankBadge = styled.span<{ $rank: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 700;
  font-size: 13px;
  
  ${({ $rank, theme }) => {
    if ($rank === 1) return `
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      color: #78350f;
      box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
    `;
    if ($rank === 2) return `
      background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%);
      color: #1f2937;
    `;
    if ($rank === 3) return `
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      color: white;
    `;
    return `
      background: ${theme.colors.backgroundSecondary};
      color: ${theme.colors.text.secondary};
    `;
  }}
`;

// Player info cell
const PlayerCell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const PlayerAvatar = styled.div<{ $rank: number }>`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  flex-shrink: 0;
  
  ${({ $rank }) => $rank === 1 && css`
    animation: ${pulse} 2s ease-in-out infinite;
  `}
`;

const PlayerName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

// Stats summary cards
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StatCard = styled.div<{ $variant?: 'primary' | 'secondary' }>`
  background: ${({ theme, $variant }) => 
    $variant === 'primary' ? theme.colors.gradients.primary : theme.colors.surface};
  border: 1px solid ${({ theme, $variant }) => 
    $variant === 'primary' ? 'transparent' : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  
  ${({ $variant }) => $variant === 'primary' && `
    box-shadow: 0 4px 20px rgba(34, 197, 94, 0.3);
  `}
  
  .stat-icon {
    font-size: 24px;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  .stat-value {
    font-size: 28px;
    font-weight: 800;
    font-family: ${({ theme }) => theme.typography.heading};
    color: ${({ $variant, theme }) => 
      $variant === 'primary' ? 'white' : theme.colors.text.primary};
    line-height: 1;
  }
  
  .stat-label {
    font-size: 11px;
    color: ${({ $variant, theme }) => 
      $variant === 'primary' ? 'rgba(255,255,255,0.9)' : theme.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;

const NoDataPlaceholder = styled.span`
  color: ${({ theme }) => theme.colors.text.disabled};
  font-size: 14px;
`;

// View toggle tabs
const ViewTabs = styled.div`
  display: flex;
  gap: 4px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ViewTab = styled.button<{ $active: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  font-family: ${({ theme }) => theme.typography.heading};
  
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? 'white' : theme.colors.text.secondary};
  
  &:hover {
    background: ${({ $active, theme }) => 
      $active ? theme.colors.primary : theme.colors.surfaceHover};
  }
`;

// Progress bar for win rate
const ProgressBar = styled.div<{ $value: number; $color: string }>`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 3px;
  overflow: hidden;
  margin-top: 4px;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ $value }) => Math.min($value, 100)}%;
    background: ${({ $color }) => $color};
    border-radius: 3px;
    transition: width 0.5s ease;
  }
`;

// Win/Draw/Loss mini stats
const WDLStats = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
`;

const WDLItem = styled.span<{ $type: 'win' | 'draw' | 'loss' }>`
  color: ${({ $type, theme }) => {
    switch ($type) {
      case 'win': return theme.colors.success;
      case 'loss': return theme.colors.error;
      default: return theme.colors.text.secondary;
    }
  }};
`;

// Coefficient display
const CoefficientBadge = styled.span<{ $value: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 13px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.typography.heading};
  
  background: ${({ $value }) => {
    if ($value >= 1) return 'rgba(34, 197, 94, 0.2)';
    if ($value >= 0.5) return 'rgba(59, 130, 246, 0.2)';
    return 'rgba(100, 116, 139, 0.2)';
  }};
  color: ${({ $value }) => {
    if ($value >= 1) return '#22c55e';
    if ($value >= 0.5) return '#3b82f6';
    return '#94a3b8';
  }};
`;

type ViewMode = 'goals' | 'results' | 'coefficients';

export const PlayerStatsPage: React.FC = () => {
  const { getPlayerStats, teams } = useApp();
  const playerStats = getPlayerStats();
  const [viewMode, setViewMode] = useState<ViewMode>('goals');

  // Get team name by ID
  const getTeamName = (teamId: string) =>
    teams.find(t => t.id === teamId)?.name || '?';

  // Get team color by ID
  const getTeamColor = (teamId: string) =>
    teams.find(t => t.id === teamId)?.color || '#64748b';

  // Filter players who have played at least one match or scored
  const activePlayerStats = playerStats.filter(
    stat => stat.totalMatches > 0 || stat.totalGoals > 0
  );

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2);
  };

  // Calculate totals
  const totalGoals = activePlayerStats.reduce((sum, stat) => sum + stat.totalGoals, 0);
  const totalMatches = activePlayerStats.reduce((sum, stat) => sum + stat.totalMatches, 0);
  const totalPlayers = activePlayerStats.length;
  const avgWinRate = activePlayerStats.length > 0 
    ? Math.round(activePlayerStats.reduce((sum, stat) => sum + stat.winRate, 0) / activePlayerStats.length)
    : 0;
  const totalCleanSheets = activePlayerStats.reduce((sum, stat) => sum + stat.cleanSheets, 0);

  return (
    <Container>
      <PageHeader>
        <Title style={{ margin: 0 }}>Статистика гравців</Title>
      </PageHeader>

      {/* Summary stats cards */}
      {activePlayerStats.length > 0 && (
        <StatsGrid>
          <StatCard $variant="primary">
            <div className="stat-icon">⚽</div>
            <div className="stat-value">{totalGoals}</div>
            <div className="stat-label">Голів</div>
          </StatCard>
          <StatCard>
            <div className="stat-icon">🏆</div>
            <div className="stat-value">{totalMatches}</div>
            <div className="stat-label">Ігор</div>
          </StatCard>
          <StatCard>
            <div className="stat-icon">👥</div>
            <div className="stat-value">{totalPlayers}</div>
            <div className="stat-label">Гравців</div>
          </StatCard>
          <StatCard>
            <div className="stat-icon">📈</div>
            <div className="stat-value">{avgWinRate}%</div>
            <div className="stat-label">Сер. вінрейт</div>
          </StatCard>
          <StatCard>
            <div className="stat-icon">🧤</div>
            <div className="stat-value">{totalCleanSheets}</div>
            <div className="stat-label">Сухих матчів</div>
          </StatCard>
        </StatsGrid>
      )}

      <Card>
        {/* View mode tabs */}
        <ViewTabs>
          <ViewTab $active={viewMode === 'goals'} onClick={() => setViewMode('goals')}>
            ⚽ Голи
          </ViewTab>
          <ViewTab $active={viewMode === 'results'} onClick={() => setViewMode('results')}>
            🏆 Результати
          </ViewTab>
          <ViewTab $active={viewMode === 'coefficients'} onClick={() => setViewMode('coefficients')}>
            📊 Коефіцієнти
          </ViewTab>
        </ViewTabs>

        {activePlayerStats.length === 0 ? (
          <EmptyState>
            <p>Ще немає статистики</p>
            <p>Додайте матчі, щоб побачити статистику гравців</p>
          </EmptyState>
        ) : (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <Th style={{ width: '50px' }}>#</Th>
                  <Th>Гравець</Th>
                  
                  {/* Goals view columns */}
                  {viewMode === 'goals' && (
                    <>
                      <Th style={{ textAlign: 'center' }}>⚽ Голи</Th>
                      <Th style={{ textAlign: 'center' }}>Ігор</Th>
                      <Th style={{ textAlign: 'center' }}>Голів/гра</Th>
                      <Th>По командах</Th>
                    </>
                  )}
                  
                  {/* Results view columns */}
                  {viewMode === 'results' && (
                    <>
                      <Th style={{ textAlign: 'center' }}>В/Н/П</Th>
                      <Th style={{ textAlign: 'center' }}>Вінрейт</Th>
                      <Th style={{ textAlign: 'center' }}>Очки</Th>
                      <Th style={{ textAlign: 'center' }}>Сухі</Th>
                    </>
                  )}
                  
                  {/* Coefficients view columns */}
                  {viewMode === 'coefficients' && (
                    <>
                      <Th style={{ textAlign: 'center' }}>Г/гра</Th>
                      <Th style={{ textAlign: 'center' }}>Г/день</Th>
                      <Th style={{ textAlign: 'center' }}>Оч/гра</Th>
                      <Th style={{ textAlign: 'center' }}>+/- голи</Th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {activePlayerStats.map((stat, index) => (
                  <Tr key={stat.playerId}>
                    <Td>
                      <RankBadge $rank={index + 1}>{index + 1}</RankBadge>
                    </Td>
                    <Td>
                      <PlayerCell>
                        <PlayerAvatar $rank={index + 1}>
                          {getInitials(stat.playerName)}
                        </PlayerAvatar>
                        <div>
                          <PlayerName>{stat.playerName}</PlayerName>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>
                            {stat.gameDaysPlayed} днів
                          </div>
                        </div>
                      </PlayerCell>
                    </Td>
                    
                    {/* Goals view data */}
                    {viewMode === 'goals' && (
                      <>
                        <Td style={{ textAlign: 'center' }}>
                          <StatNumber $variant="goals">
                            {stat.totalGoals}
                          </StatNumber>
                        </Td>
                        <Td style={{ textAlign: 'center' }}>
                          <StatNumber $variant="matches">
                            {stat.totalMatches}
                          </StatNumber>
                        </Td>
                        <Td style={{ textAlign: 'center' }}>
                          <CoefficientBadge $value={stat.goalsPerMatch}>
                            {stat.goalsPerMatch.toFixed(2)}
                          </CoefficientBadge>
                        </Td>
                        <Td>
                          <GoalsBadges>
                            {Object.entries(stat.goalsByTeam).length > 0 ? (
                              Object.entries(stat.goalsByTeam).map(([teamId, goals]) => (
                                <Badge key={teamId} $color={getTeamColor(teamId)}>
                                  {getTeamName(teamId)}: {goals}
                                </Badge>
                              ))
                            ) : (
                              <NoDataPlaceholder>—</NoDataPlaceholder>
                            )}
                          </GoalsBadges>
                        </Td>
                      </>
                    )}
                    
                    {/* Results view data */}
                    {viewMode === 'results' && (
                      <>
                        <Td style={{ textAlign: 'center' }}>
                          <WDLStats>
                            <WDLItem $type="win">{stat.wins}В</WDLItem>
                            <WDLItem $type="draw">{stat.draws}Н</WDLItem>
                            <WDLItem $type="loss">{stat.losses}П</WDLItem>
                          </WDLStats>
                        </Td>
                        <Td style={{ textAlign: 'center' }}>
                          <div>
                            <StatNumber $variant={stat.winRate >= 50 ? 'wins' : 'default'} $size="sm">
                              {stat.winRate}%
                            </StatNumber>
                            <ProgressBar 
                              $value={stat.winRate} 
                              $color={stat.winRate >= 50 ? '#22c55e' : '#64748b'} 
                            />
                          </div>
                        </Td>
                        <Td style={{ textAlign: 'center' }}>
                          <StatNumber $variant="goals">
                            {stat.points}
                          </StatNumber>
                        </Td>
                        <Td style={{ textAlign: 'center' }}>
                          <StatNumber>
                            {stat.cleanSheets}
                          </StatNumber>
                        </Td>
                      </>
                    )}
                    
                    {/* Coefficients view data */}
                    {viewMode === 'coefficients' && (
                      <>
                        <Td style={{ textAlign: 'center' }}>
                          <CoefficientBadge $value={stat.goalsPerMatch}>
                            {stat.goalsPerMatch.toFixed(2)}
                          </CoefficientBadge>
                        </Td>
                        <Td style={{ textAlign: 'center' }}>
                          <CoefficientBadge $value={stat.goalsPerGameDay}>
                            {stat.goalsPerGameDay.toFixed(2)}
                          </CoefficientBadge>
                        </Td>
                        <Td style={{ textAlign: 'center' }}>
                          <CoefficientBadge $value={stat.pointsPerMatch}>
                            {stat.pointsPerMatch.toFixed(2)}
                          </CoefficientBadge>
                        </Td>
                        <Td style={{ textAlign: 'center' }}>
                          <StatNumber 
                            $variant={stat.goalDifference > 0 ? 'wins' : stat.goalDifference < 0 ? 'losses' : 'default'}
                          >
                            {stat.goalDifference > 0 ? '+' : ''}{stat.goalDifference}
                          </StatNumber>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>
                            {stat.teamGoalsFor}:{stat.teamGoalsAgainst}
                          </div>
                        </Td>
                      </>
                    )}
                  </Tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </Card>
    </Container>
  );
};
