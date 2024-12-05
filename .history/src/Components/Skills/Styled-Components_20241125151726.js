import styled from 'styled-components'

export const Container = styled.div`
      display : flex;
      margin : 28px 0;
      width : 100%;
      max-width : 1660px;
      flex-direction : column;
      justify-content : center;
      align-items : center;
      position : relative;
      z-index : 1;    
`;

export const Wrapper = styled.div`
       max-width : 1440px;
       position : relative;
       display : flex;
       flex-direction : column;
       justify-content : center;
       align-items : center;
       width : 100%;
       gap : 8px;
`;

export const Title = styled.div`
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

export const Desc = styled.div`
      font-size : 18px;
      text-align : center;
      max-width : 600px;
      color : ${(props) => props.theme.text_secondary};

      @media screen and (max-width : 768px) {
      font-size : 16px;
      }

`;

export const SkillsContainer = styled.div`
       width : 100%;
       display : flex;
       margin-top : 30px;
       justify-content : space-between;
       gap : 30px;

        @media screen and (max-width : 768px) {
               flex-wrap : wrap;
      };
       `;

export const Skill = styled.div`
      width : 100%;
      max-width : 500px;
      color : ${(props) => props.theme.card};
      border : 0.1px solid #854CE6;
      border-radius : 16px;
      padding : 18px 36px;

      @media screen and (max-width : 768px) {
      max-width : 400px;
      padding : 10px 36px;
      };

      @media screen and (max-width : 500px) {
      max-width : 330px;
      padding : 10px 36px;
      }
`;

export const SkillTitle = styled.h2`
       font-size : 28px;
       font-weight : 600;
       color : ${(props) => props.theme.text_secondary};
       margin-bottom : 20px;
       text-align : center;
`;

export const SkillList = styled.div`
       display : flex;
       justify-content : center;
       flex-wrap : wrap;
       gap : 12px;
       margin-bottom : 20px;

`;

export const SkillItem = styled.div`
       display : flex;
       align-items : center;
       gap : 8px;
       justify-content : center;
       font-size : 16px;
       color : ${(props) => props.theme.text_primary+80};
       border-radius : 12px;
       border : 1px solid ${(props) => props.theme.text_primary+80};
       padding : 12px 16px;
       font-weight : 400;
       
       @media screen and (max-width : 500px) {
        font-size : 14px;
        padding : 6px 12px; 
       }
       `;

export const SkillImage = styled.img`
      width : 24px;
      height : 24px;
      `;