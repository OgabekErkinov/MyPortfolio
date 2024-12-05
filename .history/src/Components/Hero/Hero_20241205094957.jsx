import Typewriter from 'typewriter-effect'
import { myBio } from '../../Info/myInfo';
import { HeroContainer, HeroBg, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Title, TextLoop, Span, SubTitle, ResumeButton, Image, NavLink } from './Styled-Components';
const Hero = () => {
  return (
      <HeroContainer id='about'>
        <HeroBg></HeroBg>
        <HeroInnerContainer>
             <HeroLeftContainer>
                     <Title> Hi, I'm {myBio.name}</Title>
                      <TextLoop>I'm a 
                               <Span>
                               <Typewriter options={{
                                           strings: myBio.roles,
                                           autoStart: true,
                                           loop : true
                                }}/>
                                </Span>
                      </TextLoop>
              <SubTitle>{myBio.description}</SubTitle>
             
                 <NavLink href={myBio.resume} target="_blank" rel="noopener noreferrer">
                    <ResumeButton type='' >
                      Check resume
                    </ResumeButton>
                  </NavLink>
              
             </HeroLeftContainer>
             <HeroRightContainer>
                  <Image src = 'man.jpg' alt = 'Hero'/>
             </HeroRightContainer>
        </HeroInnerContainer>

      </HeroContainer>

  
  )
}

export default Hero
