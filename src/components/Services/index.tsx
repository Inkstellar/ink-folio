import { FC } from 'react';
import styled from 'styled-components';
import Skills from './Skills';
import { SectionTitle } from '../uiLib';

const ServicesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  position: relative;
  z-index: 1;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;
const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

 

const Services: FC = () => {
  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <SectionTitle>My Skills</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <h3>Web Development</h3>
            <p>Creating responsive and modern web applications using the latest technologies.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>UI/UX Design</h3>
            <p>Designing intuitive and user-friendly interfaces for web and mobile applications.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>PWA</h3>
            <p>Building Progressive Web Apps (PWAs) that load quickly and offer offline functionality.</p>
          </ServiceCard>
        </ServicesGrid>
      </ServicesContainer>
      <SkillsContainer>
        <Skills />
      </SkillsContainer>
    </ServicesSection>
  );
};

export default Services;