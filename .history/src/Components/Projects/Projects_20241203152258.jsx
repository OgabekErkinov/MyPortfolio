import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../Info/myInfo";
import { Container, Wrapper, Title, Desc, CardContainer } from "./Styled-Components";
import { Link } from "react-router-dom";




const Projects = () => {

  return (
    <Container id = 'projects'>
        <Wrapper>
            <Title>Projects</Title>
            <Desc>Here some of my practices</Desc>

            <CardContainer>
                {projects.map((project, idx) => {
                    return <Link>
                    </Link>
                })}
                
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects
