import { ThemeProvider } from "styled-components"
import { Education, Hero, Navbar, Projects, Skills } from '../Components/index'
import { Body, Wrapper } from "./StyledComponents"
import { darkTheme } from "../Utils/Theme"

const Layout = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Navbar/>
    <Body>
       <Hero/>
       <Wrapper>
           <Skills/>
           <Projects/>
       </Wrapper>
       <Wrapper>
           <Education/>
        </Wrapper>   
    </Body>
  </ThemeProvider>
  )
}

export default Layout
