import { education } from '../../Info/myInfo';
import { TimelineSeparator, Timeline, TimelineItem, TimelineContent, TimelineDot, TimelineConnector } from '@mui/lab'
import EducationCard from '../Cards/EducationCard';
import { Container, Wrapper, Title, Desc, TimeLineSection } from './Styled-Components';


const Education = () => {
  return (
    <Container id = 'education'>
      <Wrapper>
        <Title>Education</Title>
        <Desc>My educational details are as follows</Desc>
        <TimeLineSection>
              <Timeline>
                {education.map((item,idx) => {
                  return <TimelineItem sx={{
                    '&::before' : {
                      display : 'none'
                    }
                  }} key={idx}>
                             <TimelineContent sx={{py : '12px' , px : '2px'}}>
                                  <EducationCard education={item}/>
                             </TimelineContent>
                             <TimelineSeparator>
                                  <TimelineDot variant='outlined' color='secondary'/>
                                       {idx !== education.length  && (
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
