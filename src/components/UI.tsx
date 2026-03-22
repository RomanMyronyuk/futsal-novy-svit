import styled, { css } from 'styled-components';
import { fadeInUp } from '@/styles/theme';

// Container with max width and responsive padding
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  animation: ${fadeInUp} 0.5s ease;

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

// Modern card component with gradient and glow effects
export const Card = styled.div<{ $variant?: 'default' | 'elevated' | 'glow' }>`
  background: ${({ theme, $variant }) => 
    $variant === 'elevated' ? theme.colors.surfaceElevated : theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
  /* Subtle inner glow */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(34, 197, 94, 0.3),
      transparent
    );
    opacity: ${({ $variant }) => $variant === 'glow' ? 1 : 0};
    transition: opacity ${({ theme }) => theme.transitions.normal};
  }

  &:hover::before {
    opacity: 1;
  }

  ${({ $variant, theme }) => $variant === 'glow' && css`
    box-shadow: ${theme.shadows.glow};
  `}

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

// Button styles with variants
const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.colors.gradients.primary};
    color: white;
    border: none;
    box-shadow: 0 4px 14px rgba(34, 197, 94, 0.4);
    
    &:hover:not(:disabled) {
      box-shadow: 0 6px 20px rgba(34, 197, 94, 0.5);
      transform: translateY(-2px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.text.primary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surfaceHover};
      border-color: ${({ theme }) => theme.colors.borderLight};
      transform: translateY(-1px);
    }
  `,
  danger: css`
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    border: none;
    box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
    
    &:hover:not(:disabled) {
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
      transform: translateY(-2px);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text.secondary};
    border: none;
    
    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.text.primary};
      background: ${({ theme }) => theme.colors.surfaceHover};
    }
  `,
};

export const Button = styled.button<{ 
  $variant?: 'primary' | 'secondary' | 'danger' | 'ghost'; 
  $fullWidth?: boolean;
  $size?: 'sm' | 'md' | 'lg';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '8px 14px';
      case 'lg': return '14px 24px';
      default: return '12px 20px';
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '13px';
      case 'lg': return '16px';
      default: return '14px';
    }
  }};
  font-weight: 600;
  font-family: ${({ theme }) => theme.typography.heading};
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  ${({ $variant = 'primary' }) => buttonVariants[$variant]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  @media (max-width: 480px) {
    padding: 12px 18px;
    font-size: 14px;
  }
`;

// Modern input with focus glow
export const Input = styled.input`
  padding: 14px 18px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
  width: 100%;
  transition: all ${({ theme }) => theme.transitions.fast};
  -webkit-appearance: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }
  
  &:hover:not(:focus) {
    border-color: ${({ theme }) => theme.colors.borderLight};
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
  }
`;

// Styled select dropdown
export const Select = styled.select`
  padding: 14px 18px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
  width: 100%;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 44px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }
  
  &:hover:not(:focus) {
    border-color: ${({ theme }) => theme.colors.borderLight};
  }
  
  option {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    padding-right: 44px;
  }
`;

// Form label with accent styling
export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: ${({ theme }) => theme.typography.heading};
`;

// Form group container
export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

// Page titles with gradient accent
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.heading};
  letter-spacing: -0.03em;
  
  /* Green gradient underline */
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradients.primary};
    border-radius: 2px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

// Section subtitles
export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.heading};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

// Table wrapper for horizontal scrolling
export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 -${({ theme }) => theme.spacing.lg};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;

  @media (max-width: 480px) {
    margin: 0 -${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

// Modern table styling
export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  min-width: 500px;

  @media (max-width: 480px) {
    font-size: 13px;
    min-width: 400px;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:first-child {
    border-radius: ${({ theme }) => theme.borderRadius.md} 0 0 0;
  }
  
  &:last-child {
    border-radius: 0 ${({ theme }) => theme.borderRadius.md} 0 0;
  }

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text.primary};
  vertical-align: middle;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`;

export const Tr = styled.tr`
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
  
  &:last-child td {
    border-bottom: none;
  }
`;

// Flexbox utility component
export const Flex = styled.div<{ 
  $gap?: string; 
  $justify?: string; 
  $align?: string; 
  $wrap?: string; 
  $direction?: string 
}>`
  display: flex;
  gap: ${({ $gap, theme }) => $gap || theme.spacing.md};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'stretch'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
  flex-direction: ${({ $direction }) => $direction || 'row'};
`;

// Mobile-responsive stack
export const MobileStack = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

// Badge component with color support
export const Badge = styled.span<{ $color?: string; $variant?: 'solid' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.typography.heading};
  
  ${({ $color, $variant, theme }) => $variant === 'outline' ? css`
    background: transparent;
    border: 1px solid ${$color || theme.colors.border};
    color: ${$color || theme.colors.text.secondary};
  ` : css`
    background: ${$color || theme.colors.surfaceElevated};
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  `}
`;

// Empty state message
export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 15px;
  
  /* Subtle icon placeholder */
  &::before {
    content: '⚽';
    display: block;
    font-size: 48px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    opacity: 0.3;
  }

  p {
    margin: ${({ theme }) => theme.spacing.xs} 0;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.xl};
    font-size: 14px;
  }
`;

// Button group container
export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
    
    & > button {
      flex: 1;
      min-width: 0;
    }
  }
`;

// Page header with title and actions
export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

// Stats card for numbers
export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  
  .stat-value {
    font-size: 28px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.typography.heading};
    line-height: 1;
  }
  
  .stat-label {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;

// Icon button variant
export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.text.primary};
    border-color: ${({ theme }) => theme.colors.borderLight};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

// Divider line
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;
