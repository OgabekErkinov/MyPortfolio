import { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import { skills } from '../../Info/myInfo'
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage,
         SkillTypeContainer,
         SkillType
 } from './Styled-Components'

const Skills = () => {

  const [techs, setTechs] = useState('Front End')

  const filteredSkills = skills?.filter((skill) => skill?.title === techs)

  useEffect(() => {
    console.log(techs, filteredSkills)
  },[techs])
  return (
    <Container id = 'skills'>
       <Wrapper>
        <Title>Skills</Title>
        <Desc>
        These are the tools, technologies, and languages I regularly work with and continue to grow in.
        </Desc>
        <SkillTypeContainer>
          {
            skills?.map((skill, idx) => {
              return (
                <SkillType key={idx} onClick={() => setTechs(skill?.title)}>
                  <SkillTitle> {skill?.title} </SkillTitle>
                </SkillType>
              )
            })
          }
        </SkillTypeContainer>

        <SkillsContainer>
          
          {filteredSkills?.map((item, idx) => {
            return <Skill key={idx}>
                       <SkillTitle>{item.title}</SkillTitle>
                        <Marquee>
                        <SkillList>
                        {item.skill.map((item, idx) => {
                          return <SkillItem  key={idx}>
                                      <SkillImage  src = {item.image}/>
                                      {item.name}
                                 </SkillItem>  
                        })}
                        </SkillList>
                        </Marquee>
                       
                   </Skill>
          })}

          
          
        </SkillsContainer>
       </Wrapper>

    </Container>
  )
}

export default Skills
