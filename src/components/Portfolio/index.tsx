import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../uiLib';

const PortfolioSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  padding: 100px 0;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;



const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  border: none;
  background: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.light : theme.colors.dark};
  border: 2px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.dark};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.light};
  class: overlay;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProjectDescription = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    image: "https://via.placeholder.com/400x300",
    description: "A full-featured e-commerce platform built with React",
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "mobile",
    image: "https://via.placeholder.com/400x300",
    description: "Secure mobile banking application",
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "web",
    image: "https://via.placeholder.com/400x300",
    description: "Personal portfolio website template",
    link: "#"
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <SectionTitle>My Portfolio</SectionTitle>
        <FilterButtons>
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
            All
          </FilterButton>
          <FilterButton active={filter === 'web'} onClick={() => setFilter('web')}>
            Web
          </FilterButton>
          <FilterButton active={filter === 'mobile'} onClick={() => setFilter('mobile')}>
            Mobile
          </FilterButton>
        </FilterButtons>
        <ProjectGrid>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectOverlay className="overlay">
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLink href={project.link} target="_blank">View Project</ProjectLink>
                </ProjectOverlay>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectGrid>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;