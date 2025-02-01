import styled from 'styled-components';

export const SectionTitle = styled.h2<{ isDark?: boolean }>`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme, isDark }) => isDark ? theme.colors.light : theme.colors.dark};
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    margin: 1rem auto;
  }
`;