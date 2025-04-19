import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../Info/myInfo";
import { Container, Wrapper, Title, Desc, CardContainer, ToggleGroup, ToggleButton } from "./Styled-Components";
import { Link } from "react-router-dom";
import { useState } from "react";




const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const buttons = ['All', ...new Set(projects?.map(project => project?.category))]
  const filteredProjects = activeCategory === 'All' ? projects : projects?.filter(project => project?.category === activeCategory)

  return (
    <Container id = 'projects'>
        <Wrapper>
            <Title>Projects</Title>
            <Desc>These projects reflect the skills and concepts I’ve practiced during my learning journey.</Desc>

            <ToggleGroup>
              {
               buttons.map((category, idx) => (
                 <ToggleButton key={idx} onClick={() => setActiveCategory(category)}>{category}</ToggleButton>
                 ))
               }
            </ToggleGroup>

            <CardContainer>
                {filteredProjects?.map((project, idx) => {
                    return <Link to={project.webapp} key={idx}>
                             <ProjectCard  project = {project}/>
                           </Link>
                })}
                
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects
