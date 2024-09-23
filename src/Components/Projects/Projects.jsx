import { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../Info/myInfo";

const Container = styled.div`
      display : flex;
      margin : 5px 0;
      flex-direction : column;
      justify-content : center;
      align-items : center;
      position : relative;
      z-index : 1;    
`;

const Wrapper = styled.div`
       max-width : 1100px;
       position : relative;
       display : flex;
       flex-direction : column;
       justify-content : center;
       align-items : center;
       width : 100%;
       gap : 12px;
`;

const Title = styled.div`
       font-size : 42px;
       font-weight : 600;
       text-align : center;
       margin-top : 20px;
       color : ${(props) => props.theme.text_primary};

       @media screen and (max-width : 768px) {
       margin-top : 12px;
       font-size : 32px;
       }
`;

const Desc = styled.div`
      font-size : 18px;
      text-align : center;
      max-width : 600px;
      color : ${(props) => props.theme.text_secondary};

      @media screen and (max-width : 768px) {
      font-size : 16px;
      }

`;

const TogggleGroup = styled.div`
       display : flex;
       border : 1.5px solid ${(props) => props.theme.primary};
       color : 1.5px solid ${(props) => props.theme.primary};
       font-size : 16px;
       border-radius : 12px;
       font-weight : 500;
       margin : 22px 0;
       `;

const ToggleButton = styled.div`
       padding : 8px 18px;
       cursor : pointer;
       border-radius : 8px;
       
       ${(active) => {
        active && `
        background-color : ${(props) => props.theme.primary + 20}`}
       }
       &:hover {
       background-color : ${(props) => props.theme.primary + 8}
       }}`

const Divider = styled.div`
       width : 1.5px;
       color : ${(props) => props.theme.primary}
`;

const CardContainer = styled.div`
       display : flex;
       justify-content : center;
       align-items : center;
       flex-wrap : wrap;
       gap : 28px;
`



const Projects = () => {

  return (
    <Container id = 'projects'>
        <Wrapper>
            <Title>Projects</Title>
            <Desc>Here some of my practices</Desc>
            {/* <TogggleGroup>
                <ToggleButton>All</ToggleButton>
                <Divider/>
                <ToggleButton>Web</ToggleButton>
            </TogggleGroup> */}

            <CardContainer>
                {projects.map((project, idx) => {
                    return <ProjectCard key={idx} project = {project}/>
                })}
                
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects
