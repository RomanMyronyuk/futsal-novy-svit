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

// Animation for new players
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const FormCard = styled(Card)`
  animation: ${fadeIn} 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  
  &::before {
    opacity: 1 !important;
  }
`;

// Player avatar placeholder
const PlayerAvatar = styled.div`
  width: 36px;
  height: 36px;
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
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const PlayerName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const PlayerCount = styled.span`
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

export const PlayersPage: React.FC = () => {
  const { players, addPlayer, updatePlayer, deletePlayer } = useApp();
  const { isAuthenticated } = useAuth();
  const [showAdd, setShowAdd] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  // Add a new player
  const handleAdd = async () => {
    if (!newPlayerName.trim()) {
      alert('Введіть імʼя гравця');
      return;
    }

    await addPlayer({ name: newPlayerName.trim() });
    setNewPlayerName('');
    setShowAdd(false);
  };

  const handleEdit = (id: string, name: string) => {
    setEditingId(id);
    setEditingName(name);
  };

  const handleSaveEdit = async (id: string) => {
    if (!editingName.trim()) {
      alert('Введіть імʼя гравця');
      return;
    }

    await updatePlayer(id, { name: editingName.trim() });
    setEditingId(null);
    setEditingName('');
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Видалити цього гравця?')) {
      await deletePlayer(id);
    }
  };

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2);
  };

  return (
    <Container>
      <PageHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Title style={{ margin: 0 }}>Гравці</Title>
          <PlayerCount>{players.length}</PlayerCount>
        </div>
        {isAuthenticated && (
          <Button onClick={() => setShowAdd(!showAdd)}>
            {showAdd ? 'Скасувати' : '+ Додати гравця'}
          </Button>
        )}
      </PageHeader>

      {showAdd && (
        <FormCard>
          <Subtitle>👤 Новий гравець</Subtitle>
          <FormGroup>
            <Label>Імʼя гравця</Label>
            <Input
              type="text"
              value={newPlayerName}
              onChange={e => setNewPlayerName(e.target.value)}
              placeholder="Введіть імʼя гравця..."
              onKeyPress={e => e.key === 'Enter' && handleAdd()}
              autoFocus
            />
          </FormGroup>
          <ButtonGroup>
            <Button onClick={handleAdd}>Додати</Button>
            <Button $variant="ghost" onClick={() => setShowAdd(false)}>
              Скасувати
            </Button>
          </ButtonGroup>
        </FormCard>
      )}

      <Card>
        {players.length === 0 ? (
          <EmptyState>
            <p>Ще немає гравців</p>
            <p>Додайте гравців, щоб почати формувати команди</p>
          </EmptyState>
        ) : (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <Th style={{ width: '50px' }}>#</Th>
                  <Th>Гравець</Th>
                  {isAuthenticated && <Th style={{ width: '150px', textAlign: 'right' }}>Дії</Th>}
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <Tr key={player.id}>
                    <Td>
                      <RowNumber>{index + 1}</RowNumber>
                    </Td>
                    <Td>
                      {editingId === player.id ? (
                        <Input
                          type="text"
                          value={editingName}
                          onChange={e => setEditingName(e.target.value)}
                          onKeyPress={e => e.key === 'Enter' && handleSaveEdit(player.id)}
                          autoFocus
                          style={{ maxWidth: '300px' }}
                        />
                      ) : (
                        <PlayerInfo>
                          <PlayerAvatar>{getInitials(player.name)}</PlayerAvatar>
                          <PlayerName>{player.name}</PlayerName>
                        </PlayerInfo>
                      )}
                    </Td>
                    {isAuthenticated && (
                      <Td style={{ textAlign: 'right' }}>
                        <ButtonGroup style={{ justifyContent: 'flex-end' }}>
                          {editingId === player.id ? (
                            <>
                              <Button $size="sm" onClick={() => handleSaveEdit(player.id)}>
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
                                onClick={() => handleEdit(player.id, player.name)}
                              >
                                ✎
                              </Button>
                              <Button
                                $variant="danger"
                                $size="sm"
                                onClick={() => handleDelete(player.id)}
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
