import styled from "styled-components";

export const Container = styled.div`
      max-width : 400px;
      width : 100%;
      display : flex;
      margin : 5px 0;
      padding : 20px;
      flex-direction : column;
      justify-content : center;
      align-items : center;  
`;

export const Wrapper = styled.div`
       width : 100%;
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
       color : ${(props) => props.theme.text_primary};

       @media screen and (max-width : 768px) {
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

export const FormField = styled.div`
      width : 100%;
      height : 100%;
      color : ${(props) => props.theme.card};
      background-color : rgba(94, 94, 94, 0.09);
      border-radius : 4px;
      padding : 18px 36px;

      display : flex;
      flex-direction : column;
      justify-content : space-evenly;
      align-items : center;
      row-gap : 10px;

`

export const Input = styled.input`
        width : 320px;
        height : 40px;
        padding : 4px 8px;
        background-color : transparent;
        border : 0.1px solid #854CE6;
         color : #fff;
          font-size : 18px;
       
`
export const TextField = styled.textarea`
        width : 320px;
        padding : 4px 8px;
        background-color : transparent;
        border : 0.1px solid #854CE6;
        color : #fff;
        font-size : 18px;
      `

      export const Submit = styled.button`
      width: 120px;
      height: 40px;
      background-color: transparent;
      color: #fff;
      border: 0.1px solid #854CE6;
      border-radius: 4px;
      transition: all 0.3s ease;
    
      &:hover {
        background-color: #854CE6;
        cursor: pointer;
      }
    `;