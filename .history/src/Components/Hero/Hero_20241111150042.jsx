import Typewriter from 'typewriter-effect'
import { myBio } from '../../Info/myInfo';
import { HeroContainer, HeroBg, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Title, TextLoop, Span, SubTitle, ResumeButton, Image } from './Styled-Components';
const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
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
              <ResumeButton>Check resume</ResumeButton>
             </HeroLeftContainer>
             <HeroRightContainer>
                  <Image src = 'man.jpg' alt = 'Hero'/>
             </HeroRightContainer>
        </HeroInnerContainer>

      </HeroContainer>

    </div>
  )
}

export default Hero
