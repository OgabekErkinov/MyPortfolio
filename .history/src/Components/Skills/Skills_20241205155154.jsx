import { skills } from '../../Info/myInfo'
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './Styled-Components'

const Skills = () => {
  return (
    <Container id = 'skills'>
       <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here some of my skills which on which I have learned
        </Desc>

        <SkillsContainer>
          {skills.map((item, idx) => {
            return <Skill key={idx}>
                       <SkillTitle>{item.title}</SkillTitle>
                       <SkillList>
                        {item.skill.map((item, idx) => {
                          return <SkillItem key={idx}>
                                      <SkillImage style={{color : 'white'}} src = {item.image}/>
                                      {item.name}
                                 </SkillItem>  
                        })}
                       </SkillList>
                   </Skill>
          })}

          
          
        </SkillsContainer>
       </Wrapper>

    </Container>
  )
}

export default Skills
