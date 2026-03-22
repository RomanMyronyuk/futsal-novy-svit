import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '@/context/AuthContext';

// Main navigation container with glass morphism effect
const Nav = styled.nav`
  background: rgba(28, 38, 50, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

// Logo with football icon and gradient text
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 20px;
  font-weight: 800;
  font-family: ${({ theme }) => theme.typography.heading};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md} 0;
  white-space: nowrap;
  letter-spacing: -0.02em;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  /* Gradient text effect */
  background: linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

// Football icon animation
const LogoIcon = styled.span`
  font-size: 24px;
  filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.5));
  transition: transform ${({ theme }) => theme.transitions.fast};
  
  ${Logo}:hover & {
    transform: rotate(20deg);
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// Navigation links container with mobile support
const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(28, 38, 50, 0.98);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: ${({ $isOpen }) => ($isOpen ? '8px 0' : '0')};
    max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 0;
  }
`;

// Individual navigation link with active state
const NavLink = styled(Link)<{ $active?: boolean }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.heading};
  letter-spacing: 0.01em;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.text.secondary};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primaryLight : 'transparent'};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  
  /* Active indicator dot */
  ${({ $active, theme }) => $active && `
    &::before {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: ${theme.colors.primary};
      border-radius: 50%;
    }
  `}

  @media (max-width: 768px) {
    border-radius: 0;
    padding: 14px ${({ theme }) => theme.spacing.lg};
    width: 100%;
    
    &::before {
      display: none;
    }
    
    /* Mobile active indicator - left bar */
    border-left: 3px solid ${({ theme, $active }) =>
      $active ? theme.colors.primary : 'transparent'};
    background: ${({ theme, $active }) =>
      $active ? theme.colors.primaryLight : 'transparent'};
  }
`;

// Mobile menu button with animated icon
const MenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
  
  /* Hamburger icon lines */
  span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text.primary};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all ${({ theme }) => theme.transitions.fast};
    border-radius: 1px;
    
    &:nth-child(1) {
      top: ${({ $isOpen }) => ($isOpen ? '19px' : '12px')};
      transform: translateX(-50%) ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    
    &:nth-child(2) {
      top: 19px;
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
      transform: translateX(-50%);
    }
    
    &:nth-child(3) {
      top: ${({ $isOpen }) => ($isOpen ? '19px' : '26px')};
      transform: translateX(-50%) ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

// User section styles
const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-left: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md};
  border-left: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
`;

const UserName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 480px) {
    display: none;
  }
`;

const AuthButton = styled.button<{ $variant?: 'login' | 'logout' }>`
  padding: 8px 16px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  font-family: ${({ theme }) => theme.typography.heading};
  
  ${({ $variant, theme }) => $variant === 'login' ? `
    background: ${theme.colors.gradients.primary};
    color: white;
    box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
    }
  ` : `
    background: ${theme.colors.surfaceElevated};
    color: ${theme.colors.text.secondary};
    border: 1px solid ${theme.colors.border};
    
    &:hover {
      background: ${theme.colors.surfaceHover};
      color: ${theme.colors.text.primary};
    }
  `}
`;

const GuestBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  &::before {
    content: '👁';
  }
`;

// Login modal styles
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
  padding: ${({ theme }) => theme.spacing.md};
`;

const LoginModal = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 360px;
  animation: ${slideUp} 0.3s ease;
`;

const LoginTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.typography.heading};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  
  span {
    display: block;
    font-size: 32px;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Input = styled.input`
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }
`;

const ErrorMessage = styled.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 13px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const SubmitButton = styled.button`
  flex: 1;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.typography.heading};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const CancelButton = styled.button`
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  color: ${({ theme }) => theme.colors.text.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { user, isAuthenticated, signIn, signOut, error, clearError } = useAuth();

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { path: '/', label: 'Ігрові дні' },
    { path: '/players', label: 'Гравці' },
    { path: '/teams', label: 'Команди' },
    { path: '/stats', label: 'Статистика' },
  ];

  const handleOpenLogin = () => {
    closeMenu();
    setShowLogin(true);
    setEmail('');
    setPassword('');
    clearError();
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    setEmail('');
    setPassword('');
    clearError();
  };

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const success = await signIn(email, password);
    setIsSubmitting(false);
    if (success) {
      handleCloseLogin();
    }
  };

  const handleLogout = async () => {
    closeMenu();
    await signOut();
  };
  
  // Extract display name from email (part before @)
  const displayName = user?.email?.split('@')[0] || 'User';

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/" onClick={closeMenu}>
            <LogoIcon>⚽</LogoIcon>
            Futsal League
          </Logo>
          
          <MenuButton 
            onClick={() => setIsOpen(!isOpen)} 
            $isOpen={isOpen}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </MenuButton>
          
          <NavLinks $isOpen={isOpen}>
            {navItems.map(item => (
              <NavLink 
                key={item.path}
                to={item.path} 
                $active={location.pathname === item.path} 
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Auth section */}
            <UserSection>
              {isAuthenticated && user ? (
                <>
                  <UserInfo>
                    <UserAvatar>{displayName[0].toUpperCase()}</UserAvatar>
                    <UserName>{displayName}</UserName>
                  </UserInfo>
                  <AuthButton $variant="logout" onClick={handleLogout}>
                    Вийти
                  </AuthButton>
                </>
              ) : (
                <>
                  <GuestBadge>Гість</GuestBadge>
                  <AuthButton $variant="login" onClick={handleOpenLogin}>
                    🔐 Увійти
                  </AuthButton>
                </>
              )}
            </UserSection>
          </NavLinks>
        </NavContainer>
      </Nav>

      {/* Login Modal */}
      {showLogin && (
        <ModalOverlay onClick={handleCloseLogin}>
          <LoginModal onClick={e => e.stopPropagation()}>
            <LoginTitle>
              <span>⚽</span>
              Вхід в систему
            </LoginTitle>
            
            <LoginForm onSubmit={handleSubmitLogin}>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Введіть email"
                  autoFocus
                  autoComplete="email"
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Пароль</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Введіть пароль"
                  autoComplete="current-password"
                />
              </FormGroup>
              
              <ButtonGroup>
                <CancelButton type="button" onClick={handleCloseLogin}>
                  Скасувати
                </CancelButton>
                <SubmitButton type="submit" disabled={!email || !password || isSubmitting}>
                  {isSubmitting ? 'Вхід...' : 'Увійти'}
                </SubmitButton>
              </ButtonGroup>
            </LoginForm>
          </LoginModal>
        </ModalOverlay>
      )}
    </>
  );
};
