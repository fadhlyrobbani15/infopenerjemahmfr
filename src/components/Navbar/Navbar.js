import React, {useEffect, useState} from 'react';
import Logo from '../../components/images/5pic-removebg-preview.png';
import { FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
} from './NavbarElement';

const Navbar = ({ toggle }) => {
    const [ scrollNav, setScrollNav] =useState(false);

    const changeNav =() => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
            <img src={Logo} alt='jasapenerjemah' style={{ width: '90px' , height: 'auto' , paddingRight: '10px' }}/>
        </NavLogo>
        <MobileIcon onClick={toggle} scrollNav={scrollNav}>
            <FaBars/>
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks 
                to='hero'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
                >Beranda</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
                >Tentang Kami</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks
                to='layanan'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
                >Layanan
                </NavLinks>
            </NavItem>
                <NavBtnLink
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
                >Kontak</NavBtnLink>
        </NavMenu>
        </NavbarContainer>
    </Nav>
      
    </>
  );
};

export default Navbar;

