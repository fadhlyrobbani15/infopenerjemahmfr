import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElement'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onCLick={toggle}>
    <Icon onCLick={toggle}>
        <CloseIcon/>
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='hero' onCLick={toggle}>
                Beranda
            </SidebarLink>
            <SidebarLink to='about' onCLick={toggle}>
                Tentang Kami
            </SidebarLink>
            <SidebarLink to='layanan' onClick={toggle}>
                Layanan            
            </SidebarLink>
        </SidebarMenu>
    </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;