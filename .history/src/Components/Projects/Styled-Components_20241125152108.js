import styled from "styled-components";

export const Container = styled.div`
      max-width : 1660px
      display : flex;
      margin : 5px 0;
      flex-direction : column;
      justify-content : center;
      align-items : center;
      position : relative;
      z-index : 1;    
`;

export const Wrapper = styled.div`
       max-width : 1100px;
       position : relative;
       display : flex;
       flex-direction : column;
       justify-content : center;
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

export const ToggleGroup = styled.div`
       display : flex;
       border : 1.5px solid ${(props) => props.theme.primary};
       color : 1.5px solid ${(props) => props.theme.primary};
       font-size : 16px;
       border-radius : 12px;
       font-weight : 500;
       margin : 22px 0;
       `;

export const ToggleButton = styled.div`
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

export const Divider = styled.div`
       width : 1.5px;
       color : ${(props) => props.theme.primary}
`;

export const CardContainer = styled.div`
       display : flex;
       justify-content : center;
       align-items : center;
       flex-wrap : wrap;
       gap : 28px;
`