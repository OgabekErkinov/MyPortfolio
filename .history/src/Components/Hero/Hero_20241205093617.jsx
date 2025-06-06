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
              <ResumeButton href={myBio.resume}>
                 <NavLink>
                    Check resume
                  </NavLink>
                </ResumeButton>
             </HeroLeftContainer>
             <HeroRightContainer>
                  <Image src = 'man.jpg' alt = 'Hero'/>
             </HeroRightContainer>
        </HeroInnerContainer>

      </HeroContainer>

  
  )
}

export default Hero
