import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppProvider, useApp } from '@/context/AppContext';
import { AuthProvider } from '@/context/AuthContext';
import { GlobalStyles, theme } from '@/styles/theme';
import { Navigation } from '@/components/Navigation';
import { GameDaysList } from '@/pages/GameDaysList';
import { CreateGameDay } from '@/pages/CreateGameDay';
import { GameDayView } from '@/pages/GameDayView';
import { PlayersPage } from '@/pages/PlayersPage';
import { TeamsPage } from '@/pages/TeamsPage';
import { PlayerStatsPage } from '@/pages/PlayerStatsPage';
import styled, { keyframes } from 'styled-components';

// Loading animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.98); }
`;

// Full-screen loading component
const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const LoadingText = styled.div`
  font-size: 16px;
  font-weight: 500;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

// Connection status indicator
const ConnectionStatus = styled.div<{ $connected: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 18px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: default;
  
  background: ${({ $connected }) => 
    $connected 
      ? 'rgba(34, 197, 94, 0.15)' 
      : 'rgba(245, 158, 11, 0.15)'};
  color: ${({ $connected }) => 
    $connected 
      ? '#22c55e' 
      : '#f59e0b'};
  border: 1px solid ${({ $connected }) => 
    $connected 
      ? 'rgba(34, 197, 94, 0.3)' 
      : 'rgba(245, 158, 11, 0.3)'};
  backdrop-filter: blur(8px);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ $connected }) => 
      $connected 
        ? '0 4px 20px rgba(34, 197, 94, 0.2)' 
        : '0 4px 20px rgba(245, 158, 11, 0.2)'};
  }
`;

// Animated status dot
const StatusDot = styled.span<{ $connected: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $connected }) => 
    $connected 
      ? '#22c55e' 
      : '#f59e0b'};
  box-shadow: ${({ $connected }) => 
    $connected 
      ? '0 0 8px #22c55e' 
      : '0 0 8px #f59e0b'};
  animation: ${pulse} 2s ease-in-out infinite;
`;

// Status icon
const StatusIcon = styled.span`
  font-size: 14px;
`;

// Main application content
const AppContent: React.FC = () => {
  const { isLoading, isFirebaseConnected } = useApp();

  // Show loading screen while data is being fetched
  if (isLoading) {
    return (
      <LoadingScreen>
        <LoadingSpinner />
        <LoadingText>Завантаження...</LoadingText>
      </LoadingScreen>
    );
  }

  return (
    <>
      <BrowserRouter basename="/futsal-league">
        <Navigation />
        <Routes>
          <Route path="/" element={<GameDaysList />} />
          <Route path="/game-day/new" element={<CreateGameDay />} />
          <Route path="/game-day/:id" element={<GameDayView />} />
          <Route path="/game-day/:id/edit" element={<CreateGameDay />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/stats" element={<PlayerStatsPage />} />
        </Routes>
      </BrowserRouter>

      {/* Connection status badge */}
      <ConnectionStatus $connected={isFirebaseConnected}>
        <StatusDot $connected={isFirebaseConnected} />
        <StatusIcon>{isFirebaseConnected ? '☁️' : '💾'}</StatusIcon>
        {isFirebaseConnected ? 'Firebase' : 'Локально'}
      </ConnectionStatus>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <AppProvider>
          <AppContent />
        </AppProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
