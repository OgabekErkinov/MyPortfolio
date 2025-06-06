import styled from 'styled-components'

export const HeroContainer = styled.div`
       max-width : 1660px;
       background-color : ${(props) => props.theme.color_light};
       display : flex;
       justify-content : center;
       position : relative;
       padding : 80px 30px;
       
       @media screen and (max-width : 960px) {
       padding: 66px 16px }
       
       @media screen and (max-width : 640px) {
       padding: 32px 16px }
       
       z-index : 1;
       clip-path : polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)`;

export const HeroBg = styled.div`
       position : absolute;
       display : flex;
       justify-content : end;
       top : 50%;
       right : 0;
       bottom : 0;
       left : 50%;
       overflow : hidden;
       width : 100%;
       height : 100%;
       padding : 0 30px;
       -webkit-transform : translateX(-50%) translateY(-50%);
       transform : translateX(-50%) translateY(-50%)
       
       @media screen and (max-width : 960px) {
             padding : 0 0;
             justify-content : center; }`;

export const HeroInnerContainer = styled.div`
      display : flex;
      justify-content : space-between;
      align-items : center;
      width : 100%;
      max-width : 1100px;
      
      @media screen and (max-width : 960px) {
      flex-direction : column;
      }`;

export const HeroLeftContainer = styled.div`
       width : 100%;
       order : 1;
       display : flex;
       align-items : center;
       flex-direction : column;
       
       @media screen and (max-width : 960px) {
       order : 2;
       margin-bottom : 32px;
       display : flex;
       align-items : center;
       flex-direction : column;
       }; 
       
       @media screen and (max-width : 640px) {
       order : 2;
       margin-bottom : 32px;
       display : flex;
       align-items : center;
       flex-direction : column;
       }`;

export const HeroRightContainer = styled.div`
      width : 100%;
      order : 2;
      display : flex;
      justify-content : end;
      gap : 12px;
      
      @media screen and (max-width : 960px) {
       order : 1;
       margin-bottom : 80px;
       justify-content : center;
       align-items : center;
      };
      
       @media screen and (max-width : 640px) {
       order : 1;
       margin-bottom : 30px;
      }`;

export const Title = styled.div`
       font-size : 50px;
       font-weight : 700;
       color : ${(props) => props.theme.text_primary};
       line-height : 68px;

       @media screen and (max-width : 960px) {
       text-align : center;
       };

       @media screen and (max-width : 640px) {
       font-size : 40px;
       line-height : 48px;
       margin-bottom : 8px }
`;

export const TextLoop = styled.div`
       font-size : 32px;
       font-weight : 600;
       color : ${(props) => props.theme.text_primary};
       line-height : 68px;
       gap : 12px;
       display : flex;
       

       
       @media screen and (max-width : 960px) {
       text-align : center ;
       };
       
       @media screen and (max-width : 640px) {
       font-size : 22px;
       line-height : 48px;
       margin-bottom : 16px;

       }`;

export const Span = styled.span`
      color : ${(props) => props.theme.text_primary};
      cursor : pointer;

      `;

export const SubTitle = styled.div`
      font-size : 20px;
      color : ${(props) => props.theme.text_primary + 95};
      line-height : 32px;
      margin-bottom : 42px;
      
      @media screen and (max-width : 960px) {
      text-align : center; 
      };
      
      @media screen and (max-width : 640px) {
      font-size : 16px;
      line-height : 32px;
      }`;

export const ResumeButton = styled.a`
     
     
      text-decoration : none;
      width : 95%;
      max-width : 300px;
      text-align : center;
      padding : 16px 0;
      color : ${(props) => props.theme.white};
      border-radius : 20px;
      cursor : pointer;
      font-size : 20px;
      font-weight : 600;
      transition : all 0.2s ease-in-out !important;
      background : linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
      background : -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
      background : -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
      box-shadow : 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
      &:hover {
        transform : scale(1.05);
        transition : all 0.4s ease-in-out;
        box-shadow : 20px 20px 60px #1F2634;
        filter : brightness(1)
      }

      @media (max-width: 640px) {
      padding : 12px 0;
      font-size : 18px;
      }
      `


export const Image = styled.img`
       width : 100%;
       height : 100%;
       position : relative;
       border-radius : 40%;
       max-height : 400px;
       max-width : 400px;
       object-fit : cover;
       object-position : center;
       border : 2px solid ${(props) => props.theme.primary};
       transform: rotate(40deg);

       
       @media (max-width : 960px) {
       max-height : 400px;
       max-width : 400px;
       
       };
       
       @media screen and (max-width : 640px) {
       max-height : 280px;
       max-width : 280px;
       }`