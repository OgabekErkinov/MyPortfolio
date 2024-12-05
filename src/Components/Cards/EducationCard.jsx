import styled from "styled-components";

const Card = styled.div`
      width : 80%;
      border-radius : 10px;
      box-shadow : 0px 0px 10px rgba(0, 0, 0, 0.1);
      padding : 12px 16px;
      justify-content : space-between;
      position : relative;
      overflow : hidden;
      display : flex;
      flex-direction : column;
      gap : 12px;
      transition : all 0.3s ease-in-out;

      &:hover {
      box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.2);
      transform : translateY(-5px); 
      }
`;

const Top = styled.div`
       display : flex;
       gap : 12px;
       width : 100%;
`

const Body = styled.div`
      display : flex;
      flex-direction : column;
      width : 100%;
`;

const Logo = styled.img`
       height : 70px;
       border-radius : 15px;
       box-shadow : 0px 0px 10px rgba(0, 0, 0, 0.1);
       margin-top : 4px;

       @media (max-width : 768px) {
       height : 40px;
       }
`;

const Description = styled.div`
      width : 100%;
      font-size : 15px;
      font-weight : 400;
      color : ${(props) => props.theme.text_primary};
      margin-bottom : 10px;

      @media (max-width : 768px) {
      font-size : 12px;
      }
`;

const Span = styled.span`
      overflow : hidden;
      display : -webkit-box;
      -webkit-line-clamp : 4;
      -webkit-box-orient : vertical;
      max-width : 100%;
      text-overflow : ellipsis;
`;

const Grade = styled.div`
      font-size : 14px;
      font-weight : 500;
      color : ${(props) => props.theme.text_secondary + 99};

      @media (max-width : 768px) {
      font-size : 12px;
      }
`;

const Name = styled.h3`
      font-size : 14px;
      color : ${(props) => props.theme.text_secondary};

      @media (max-width : 768px) {
      font-size : 12px;
      };
      
`;

const Degree = styled.div`
      font-size: 10px;
`;

const Date = styled.div`
      font-size : 12px;
`

const EducationCard = ({education}) => {
  return (
    <Card>
        <Top>
            <Logo src = {education.img}/>
            <Body>
                <Name>{education.school}</Name>
                <Degree>{education.degree}</Degree>
                <Date>{education.date}</Date>
            </Body>
        </Top>
        <Grade>{education.grade}</Grade>
        <Description>
            <Span>{education.desc}</Span>
        </Description>
    </Card>
  )
}

export default EducationCard
