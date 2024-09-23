import styled from 'styled-components';
import { education } from '../../Info/myInfo';
import { TimelineSeparator, Timeline, TimelineItem, TimelineContent, TimelineDot, TimelineConnector } from '@mui/lab'
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
      display : flex;
      flex-direction : column;
      justify-content : center;
      position : relative;
      z-index : 1;
      align-items : center;
      padding : 40px 0px 80px 0px;

      @media (max-width : 960px) {
      padding : 0px;
      }
`;

const Wrapper = styled.div`
      max-width : 1100px;
      position : relative;
      display : flex;
      flex-direction : column;
      justify-content : space-between;
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

      @media (max-width : 768px) {
      margin-top : 12px;
      font-size : 32px;
      }
`;

const Desc = styled.div`
      font-size : 18px;
      max-width : 600px;
      text-align : center;
      color : ${(props) => props.theme.text_secondary};

      @media (max-width : 768px) {
      font-size : 16px;
      }
`;

const TimeLineSection = styled.div`
       width : 100%;
       max-width : 1000px;
       margin-top : 10px;
       display : flex;
       flex-direction : column;
       align-items : center;
       justify-content : center;
       gap : 12px;
`;

const Education = () => {
  return (
    <Container id = 'education'>
      <Wrapper>
        <Title>Education</Title>
        <Desc>My educational details are as follows</Desc>
        <TimeLineSection>
              <Timeline>
                {education.map((item,idx) => {
                  return <TimelineItem key={idx}>
                             <TimelineContent sx={{py : '12px' , px : '2px'}}>
                                  <EducationCard education={item}/>
                             </TimelineContent>
                             <TimelineSeparator>
                                  <TimelineDot variant='outlined' color='secondary'/>
                                       {idx !== education.length && (
                                       <TimelineConnector sx={{background : '#854CE6'}}/>)
                                       }
                              </TimelineSeparator>
                          </TimelineItem>
                })}
              </Timeline>
        </TimeLineSection>
      </Wrapper>

    </Container>
  )
}

export default Education
