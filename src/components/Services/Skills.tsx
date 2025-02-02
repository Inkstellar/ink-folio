import styled from 'styled-components';
import { 
  FaRoute, 
  FaMobile, 
  FaPalette, 
  FaUniversalAccess, 
  FaChartLine, 
  FaLayerGroup, 
  FaRegWindowMaximize,
  FaTools
} from 'react-icons/fa';
import { 
  MdSpeed, 
  MdApi, 
  MdDevices, 
  MdArchitecture,
  MdLibraryBooks,
  MdAnalytics,
  MdDashboardCustomize
} from 'react-icons/md';

const SkillsContainer = styled.div`
  padding: 2rem 0;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.li`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const skillsData = [
  {
    category: "User Experience",
    skills: [
      { name: "User Journey Mapping", icon: FaRoute },
      { name: "Interactive Prototypes", icon: MdDashboardCustomize },
      { name: "Design System Creation", icon: FaPalette },
      { name: "Usability Testing", icon: FaTools },
      { name: "Information Architecture", icon: MdArchitecture },
      { name: "User Research & Analysis", icon: MdAnalytics },
      { name: "Responsive Web Design", icon: MdDevices },
      { name: "Mobile-First Design", icon: FaMobile }
    ]
  },
  {
    category: "Front-end Development",
    skills: [
      { name: "Single Page Applications", icon: FaRegWindowMaximize },
      { name: "Progressive Web Apps", icon: FaLayerGroup },
      { name: "Performance Optimization", icon: MdSpeed },
      { name: "API Integration", icon: MdApi },
      { name: "Component Libraries", icon: MdLibraryBooks },
      { name: "State Management", icon: FaChartLine },
      { name: "Responsive Layouts", icon: MdDevices },
      { name: "Cross-browser Compatibility", icon: FaLayerGroup },
      { name: "Web Accessibility (WCAG)", icon: FaUniversalAccess }
    ]
  }
];

const Skills = () => {
    return (
        <SkillsContainer>
          {skillsData.map((category, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>{category.category}</CategoryTitle>
              <SkillsList>
                {category.skills.map(({ name, icon: Icon }, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <Icon /> {name}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
    );
};

export default Skills;