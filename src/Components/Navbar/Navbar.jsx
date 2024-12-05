import React, { useState } from 'react'
import { GiPalmTree } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
import { myBio } from '../../Info/myInfo';
import { Nav, NavContainer, NavItems, NavLink, NavLogo, MobileIcon, MobileMenu, MobileMenuLink, ButtonContainer, GithubButton } from './Styled-Components'; 


const Navbar = () => {
  const [open, setOpen] = useState(false)


  return (
    <Nav>
      <NavContainer>
        <NavLogo href ='#'>
            <GiPalmTree size={'3rem'}/>
            MyPortfolio
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)}/>
        </MobileIcon>

        {/* Navigation items */}
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>

        <ButtonContainer>
            <NavLink href={myBio.github} target='blank'>
              <GithubButton>
                 Github Profile
             </GithubButton>
           </NavLink>
        </ButtonContainer>

      </NavContainer>

      {open && <MobileMenu>
        <MobileMenuLink href = '#about' onClick = {()=> setOpen(!open)}>
          About
        </MobileMenuLink>

        <MobileMenuLink href = '#skills' onClick = {()=>setOpen(!open)}>
          Skills
        </MobileMenuLink>

        <MobileMenuLink href = '#project' onClick = {()=>setOpen(!open)}>
          Projects
        </MobileMenuLink>

        <MobileMenuLink href = '#education' onClick = {()=>setOpen(!open)}>
          Education
        </MobileMenuLink>

        <MobileMenuLink>
            <GithubButton href = {myBio.github} onClick = {()=>setOpen(!open)}>
                Github Profile
            </GithubButton>
        </MobileMenuLink>

        </MobileMenu>}
    </Nav>
  )
}

export default Navbar
