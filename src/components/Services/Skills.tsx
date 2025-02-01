import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 2rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.li`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Skills = () => {
    return (
        <SkillsContainer>
              <SkillCategory>
                <CategoryTitle>User Experience</CategoryTitle>
                <SkillsList>
                    <SkillItem>Figma</SkillItem>
                    <SkillItem>Adobe XD</SkillItem>
                    <SkillItem>Wireframing</SkillItem>
                    <SkillItem>Prototyping</SkillItem>
                    <SkillItem>User Research</SkillItem>
                    <SkillItem>UI Design</SkillItem>
                    <SkillItem>Design Systems</SkillItem>
                    <SkillItem>User Testing</SkillItem>
                </SkillsList>
            </SkillCategory>
            <SkillCategory>
                <CategoryTitle>Front-end Development</CategoryTitle>
                <SkillsList>
                    <SkillItem>HTML5</SkillItem>
                    <SkillItem>CSS3</SkillItem>
                    <SkillItem>JavaScript</SkillItem>
                    <SkillItem>TypeScript</SkillItem>
                    <SkillItem>React</SkillItem>
                    <SkillItem>Redux</SkillItem>
                    <SkillItem>Styled Components</SkillItem>
                    <SkillItem>MUI React</SkillItem>
                    <SkillItem>Responsive Design</SkillItem>
                </SkillsList>
            </SkillCategory>

          
        </SkillsContainer>
    );
};

export default Skills;