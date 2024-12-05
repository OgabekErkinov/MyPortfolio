import styled from 'styled-components';

export const Container = styled.div`
max-width : 1660px;
      display : flex;
      flex-direction : column;
      width : 100%;
      justify-content : center;
      align-items : center;
      position : relative;
      z-index : 1;
      padding : 40px 0px 80px 0px;

      @media (max-width : 960px) {
      padding : 0px;
      }
`;

export const Wrapper = styled.div`
      width : 100%;
      position : relative;
      display : flex;
      flex-direction : column;
      justify-content : space-between;
      align-items : center;
      width : 100%;
      gap : 12px;

`;

export const Title = styled.div`
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

export const Desc = styled.div`
      font-size : 18px;
      max-width : 600px;
      text-align : center;
      color : ${(props) => props.theme.text_secondary};

      @media (max-width : 768px) {
      font-size : 16px;
      }
`;

export const TimeLineSection = styled.div`
       width : 100%;
       max-width : 1000px;
       margin : 10px 10px 0 0;
       display : flex;
       flex-direction : column;
       align-items : center;
       justify-content : center;
       gap : 12px;
`;