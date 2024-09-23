import styled from "styled-components";

export const Body = styled.div`
      background-color : ${(props) => props.theme.bg};
      width : 100%;
      height : 100%;
      overflow : hidden
`;

export const Wrapper = styled.div`
max-width : 1350px;
padding : 10px 0 100px 0;
      background : linear-gradient{
                          38.73deg,
                          rgba(204, 0, 187, 0.15) 0%,
                          rgba(201, 32, 184, 0) 50% },
                   linear-gradient{
                          141.27deg,
                          rgba(0, 70, 209, 0) 50%,
                          rgba(0, 70, 209, 0.15) 100% };
      width : 100%;
      clip-path : polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
 `;