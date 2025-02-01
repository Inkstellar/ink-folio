import { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineFormatPainter } from 'react-icons/ai';

const SettingsContainer = styled.div`
  position: fixed;
  right: 0;
  top: 10%;
  transform: translateY(20%);
  background: ${({ theme }) => theme.colors.dark};
  padding: 8px;
  border-radius: 8px 0 0 8px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PainterIcon = styled(AiOutlineFormatPainter)`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;
`;

const ColorGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
  gap: 0.2rem;
  overflow: hidden;
  max-width: 0;
  transition: max-width 0.3s ease;
  ${SettingsContainer}:hover & {
    max-width: 50px;
  }
`;

const ColorOption = styled.span<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
  border: 2px solid ${({ theme }) => theme.colors.light};
    transform: scale(1.1);
  }
`;

const colors = [
  '#FF6B6B',  // Coral
  '#4ECDC4',  // Turquoise
  '#45B7D1',  // Sky Blue
  '#96CEB4',  // Sage
  '#e31b6d',  // pink
  '#D4A5A5',  // Dusty Rose
];

interface SettingsProps {
  onColorChange: (color: string) => void;
}

const Settings: FC<SettingsProps> = ({ onColorChange }) => {
  return (
    <SettingsContainer>
      <PainterIcon />
      <ColorGrid>
        {colors.map((color) => (
          <ColorOption
            key={color}
            color={color}
            onClick={() => onColorChange(color)}
            aria-label={`Change theme color to ${color}`}
          />
        ))}
      </ColorGrid>
    </SettingsContainer>
  );
};

export default Settings;