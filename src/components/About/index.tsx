import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTypescript,SiMui ,SiJavascript} from "react-icons/si";
import { IconType } from 'react-icons';
 import { DiIllustrator,DiPhotoshop} from "react-icons/di";

// Add this before the About component
const skills: { icon: IconType; name: string }[] = [
  { icon: FaFigma, name: 'Figma'},
  { icon: DiPhotoshop, name: 'Photoshop'},
  { icon: DiIllustrator, name: 'Illustrator'},
  { icon: FaHtml5, name: 'HTML5' },
  { icon: FaCss3, name: 'CSS3' },
  { icon: FaReact, name: 'React' },
  { icon: SiMui, name: 'MUI'},
  { icon: FaGithub, name: 'Github'},
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiTypescript, name: 'TypeScript' },

];

const AboutSection = styled.section`
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

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.dark};
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    margin: 1rem auto;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.dark};
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.dark};
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;


const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <Grid>
          <AboutContent>
            <h3>Who am I?</h3>
            <p>
              As a UX Engineer, I bridge the gap between UX design and front-end development, ensuring seamless user experiences through intuitive design and clean, efficient code. With a deep understanding of both user needs and technical feasibility, I collaborate closely with designers and developers to create engaging, accessible, and high-performance digital products."
              Let me know if you want to highlight any specific skills or experiences!
            </p>

            <h3>My Story</h3>
            <p>
              I'm both, a solution seeking UX Designer & a passionate Frontend Developer with a keen eye for design and a
              commitment to creating beautiful, functional websites. With several
              years of experience in UX Design and Web Development, I specialize in building
              responsive and user-friendly applications.
            </p>

          </AboutContent>
          <SkillsGrid>
            {skills.map(({ icon: Icon, name }, index) => (
              <SkillItem
                key={name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Icon /> {name}
              </SkillItem>
            ))}
          </SkillsGrid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;