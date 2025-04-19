import React, { useState } from 'react'
import { GiPalmTree } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
import { myBio } from '../../Info/myInfo';
import { Nav, NavContainer, NavItems, NavLink, NavLogo, MobileIcon, MobileMenu, MobileMenuLink, ButtonContainer, GithubButton } from './Styled-Components'; 


const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleClick = (id) => {
    const element = document.getElementById(id)
    window.scrollTo({
      top : element.offsetTop
    })
    setOpen(false)
  }


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
          <NavLink href='#contact'>Contact</NavLink>
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
        <MobileMenuLink onClick = {()=>handleClick('about')}>
          About
        </MobileMenuLink>

        <MobileMenuLink onClick = {()=>handleClick('skills')}>
          Skills
        </MobileMenuLink>

        <MobileMenuLink onClick = {()=>handleClick('projects')}>
          Projects
        </MobileMenuLink>

        <MobileMenuLink onClick = {()=>handleClick('education')}>
          Education
        </MobileMenuLink>

        <MobileMenuLink>
            <GithubButton href = {myBio.github} onClick = {()=>setOpen(false)}>
                Github Profile
            </GithubButton>
        </MobileMenuLink>

        </MobileMenu>}
    </Nav>
  )
}

export default Navbar
