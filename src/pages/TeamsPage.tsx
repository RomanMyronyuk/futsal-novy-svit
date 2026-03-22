import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import {
  Container,
  Title,
  Subtitle,
  Card,
  Button,
  Input,
  Label,
  FormGroup,
  Table,
  Th,
  Td,
  Tr,
  EmptyState,
  ButtonGroup,
  TableWrapper,
  PageHeader,
} from '@/components/UI';
import styled, { keyframes } from 'styled-components';

// Animation for form card
const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FormCard = styled(Card)`
  animation: ${slideDown} 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
`;

// Enhanced color input
const ColorInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ColorInput = styled.input`
  width: 60px;
  height: 48px;
  padding: 4px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.borderLight};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`;

const ColorPreview = styled.div<{ $color: string }>`
  padding: 8px 16px;
  background: ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

// Team badge with color
const TeamBadge = styled.div<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: ${({ $color }) => $color};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px ${({ $color }) => `${$color}40`};
`;

const TeamCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`;

const RowNumber = styled.span`
  color: ${({ theme }) => theme.colors.text.disabled};
  font-size: 13px;
`;

// Quick color presets
const ColorPresets = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const ColorPresetButton = styled.button<{ $color: string; $isSelected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ $color }) => $color};
  border: 3px solid ${({ $isSelected }) => 
    $isSelected ? 'white' : 'transparent'};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ $isSelected }) => 
    $isSelected ? '0 0 0 2px rgba(34, 197, 94, 0.5)' : 'none'};
  
  &:hover {
    transform: scale(1.1);
  }
`;

const PRESET_COLORS = [
  '#ef4444', // Red
  '#f97316', // Orange
  '#f59e0b', // Amber
  '#22c55e', // Green
  '#10b981', // Emerald
  '#06b6d4', // Cyan
  '#3b82f6', // Blue
  '#6366f1', // Indigo
  '#8b5cf6', // Violet
  '#ec4899', // Pink
  '#64748b', // Slate
  '#1e293b', // Dark
];

export const TeamsPage: React.FC = () => {
  const { teams, addTeam, updateTeam, deleteTeam } = useApp();
  const { isAuthenticated } = useAuth();
  const [showAdd, setShowAdd] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamColor, setNewTeamColor] = useState('#3b82f6');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [editingColor, setEditingColor] = useState('');

  const handleAdd = async () => {
    if (!newTeamName.trim()) {
      alert('Введіть назву команди');
      return;
    }

    await addTeam({ name: newTeamName.trim(), color: newTeamColor });
    setNewTeamName('');
    setNewTeamColor('#3b82f6');
    setShowAdd(false);
  };

  const handleEdit = (id: string, name: string, color: string) => {
    setEditingId(id);
    setEditingName(name);
    setEditingColor(color);
  };

  const handleSaveEdit = async (id: string) => {
    if (!editingName.trim()) {
      alert('Введіть назву команди');
      return;
    }

    await updateTeam(id, { name: editingName.trim(), color: editingColor });
    setEditingId(null);
    setEditingName('');
    setEditingColor('');
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Видалити цю команду?')) {
      await deleteTeam(id);
    }
  };

  return (
    <Container>
      <PageHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Title style={{ margin: 0 }}>Команди</Title>
          <TeamCount>{teams.length}</TeamCount>
        </div>
        {isAuthenticated && (
          <Button onClick={() => setShowAdd(!showAdd)}>
            {showAdd ? 'Скасувати' : '+ Додати команду'}
          </Button>
        )}
      </PageHeader>

      {showAdd && (
        <FormCard>
          <Subtitle>🏆 Нова команда</Subtitle>
          <FormGroup>
            <Label>Назва команди</Label>
            <Input
              type="text"
              value={newTeamName}
              onChange={e => setNewTeamName(e.target.value)}
              placeholder="Введіть назву команди..."
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <Label>Колір команди</Label>
            <ColorInputWrapper>
              <ColorInput
                type="color"
                value={newTeamColor}
                onChange={e => setNewTeamColor(e.target.value)}
              />
              <ColorPreview $color={newTeamColor}>
                {newTeamName || 'Нова команда'}
              </ColorPreview>
            </ColorInputWrapper>
            <ColorPresets>
              {PRESET_COLORS.map(color => (
                <ColorPresetButton
                  key={color}
                  $color={color}
                  $isSelected={newTeamColor === color}
                  onClick={() => setNewTeamColor(color)}
                  type="button"
                />
              ))}
            </ColorPresets>
          </FormGroup>
          <ButtonGroup>
            <Button onClick={handleAdd}>Створити команду</Button>
            <Button $variant="ghost" onClick={() => setShowAdd(false)}>
              Скасувати
            </Button>
          </ButtonGroup>
        </FormCard>
      )}

      <Card>
        {teams.length === 0 ? (
          <EmptyState>
            <p>Ще немає команд</p>
            <p>Створіть команди для проведення матчів</p>
          </EmptyState>
        ) : (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <Th style={{ width: '50px' }}>#</Th>
                  <Th>Команда</Th>
                  {isAuthenticated && <Th style={{ width: '150px', textAlign: 'right' }}>Дії</Th>}
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <Tr key={team.id}>
                    <Td>
                      <RowNumber>{index + 1}</RowNumber>
                    </Td>
                    <Td>
                      {editingId === team.id ? (
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                          <Input
                            type="text"
                            value={editingName}
                            onChange={e => setEditingName(e.target.value)}
                            style={{ maxWidth: '200px' }}
                          />
                          <ColorInput
                            type="color"
                            value={editingColor}
                            onChange={e => setEditingColor(e.target.value)}
                            style={{ width: '48px', height: '40px' }}
                          />
                        </div>
                      ) : (
                        <TeamBadge $color={team.color}>{team.name}</TeamBadge>
                      )}
                    </Td>
                    {isAuthenticated && (
                      <Td style={{ textAlign: 'right' }}>
                        <ButtonGroup style={{ justifyContent: 'flex-end' }}>
                          {editingId === team.id ? (
                            <>
                              <Button $size="sm" onClick={() => handleSaveEdit(team.id)}>
                                ✓ Зберегти
                              </Button>
                              <Button
                                $variant="ghost"
                                $size="sm"
                                onClick={() => setEditingId(null)}
                              >
                                ✕
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                $variant="secondary"
                                $size="sm"
                                onClick={() => handleEdit(team.id, team.name, team.color)}
                              >
                                ✎
                              </Button>
                              <Button
                                $variant="danger"
                                $size="sm"
                                onClick={() => handleDelete(team.id)}
                              >
                                ✕
                              </Button>
                            </>
                          )}
                        </ButtonGroup>
                      </Td>
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
