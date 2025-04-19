import { ThemeProvider } from "styled-components"
import { Education, Hero, Navbar, Projects, Skills } from '../Components/index'
import { Body, Wrapper } from "./StyledComponents"
import { darkTheme } from "../Utils/Theme"
import Contact from "../Components/Contact/Contact"
import Footer from "../Components/Footer/Footer"

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
      <Wrapper>
         <Contact/>   
      </Wrapper> 
      <Footer/>
    </Body>
  </ThemeProvider>
  )
}

export default Layout
