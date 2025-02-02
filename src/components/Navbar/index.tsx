import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from  'react-scroll';


const NavbarContainer = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.dark : 'transparent'};
  padding: 1rem 0;
  transition: all 0.3s ease-in-out;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
width: 200px;
  height: 40px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  background: url("https://mir-s3-cdn-cf.behance.net/user/230/5004b318593537.5e9b2db9d5840.gif")
    0 -5px/40px 40px no-repeat;
  padding-left: 50px;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;


const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <NavContent>
        <Logo>Inkstellar</Logo>
        <NavLinks>
          <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
          <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          {/* <NavLink to="portfolio" smooth={true} duration={500}>Portfolio</NavLink> */}
          <NavLink to="services" smooth={true} duration={500}>What I'm good at</NavLink>
          <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;