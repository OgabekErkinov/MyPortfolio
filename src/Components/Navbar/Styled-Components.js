import {Link, Link as LinkR} from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.div`
      background-color : ${(props) => props.theme.card_light};
      height : 80px;
      display : flex;
      justify-content : center;
      align-items : center;
      font-size : 1rem;
      position : sticky;
      top: 0; 
      z-index : 10;
      @media screen and (max-width : 960px) {
      transition : 0.8s all ease;
      }      
`

export const NavContainer = styled.div`
      display : flex;
      justify-content : space-between;
      height : 60px;
      z-index : 1;
      width : 100%;
      padding : 0 24px;
      max-width : 1100px      
`

export const NavLogo = styled.a`
      width : 80%;
      color : ${(props) => props.theme.primary};
      padding : 0 6px;
      display : flex;
      justify-self : flex-start;
      cursor : pointer;
      text-decoration : none;
      align-items : center;
      @media screen and (max-width : 640px){
      padding : 0 0px; 
      }
`

export const MobileIcon = styled.div`
      display : none;
      @media screen and (max-width : 768px) {
      display : block;
      position : absolute;
      top : 0;
      right : 0;
      transform : translate(-100%, 50%);
      font-size : 1.5rem;
      cursor : pointer;
      color : ${(props) => props.theme.text_primary};
      }
`

export const NavItems = styled.ul`
      width : 100%;
      display : flex;
      justify-content : center;
      align-items : center;
      gap : 32px;
      list-style : none;

      @media screen and (max-width : 768px) {
      display : none ;
      }
`
export const NavLink = styled.a`
      color : ${(props) => props.theme.text_primary};
      font-weight : 500;
      cursor : pointer;
      text-decoration : none;
      transition : all 0.2s ease-in-out;
      &:hover {
      color : ${(props) => props.theme.primary};
      }
`

export const ButtonContainer = styled.div`
      display : flex;
      align-items : center;
      justify-content : end;
      width : 80%;
      height : 100%;
      padding : 0 6px;
      @media screen and (max-width : 640px) {
      display : none;
      }
`

export const GithubButton = styled.button`
      background-color : transparent;
      color : ${(props) => props.theme.primary};
      border : 1.8px solid ${(props) => props.theme.primary};
      border-radius : 20px;
      display : flex;
      justify-content : center;
      align-items : center;
      padding : 0px 20px;
      font-size : 1rem;
      font-weight : 500;
      cursor : pointer;
      height : 70%;
      transition: 0.4s;
      &:hover {
      background-color : ${(props) => props.theme.button};
      color : ${(props) => props.theme.text_secondary};
      transition: 0.4s;
      }

      @media screen and (max-width : 640px) {
      font-size ; 0.8rem
      }
`
export const Span = styled.div`
             padding : 0 4px;
             font-weight : bold;
             font-size : 18px;
`

export const MobileMenu = styled.div`
      display : flex;
      flex-direction : column;
      justify-content : center;
      gap : 16px;
      position : absolute;
      top : 60px;
      right : 10px;
      width : 50%;
      padding : 12px 40px 24px 40px;
      background : ${(props) => props.theme.card_light + 90};
      transition : all 0.3s ease-in-out;
      transform : ${({open}) => {open ? "translateX(0)" : "translateX(100%)"}};
      border-radius : 0 0 20px 20px;
      box-shadow : 0 5px 10px rgba(0, 0, 0, 0.3);
      opacity : ${({open}) => {open ? "1" : "0"}};
      z-index : ${({open}) => {open ? "1" : "-1"}};
`

export const MobileMenuLink  = styled(LinkR)`
      color : ${(props) => props.theme.text_primary};
      font-weight : 500;
      cursor : pointer;
      text-decoration : none;
      transition : all 0.2s ease-in-out;
      &:hover {
      color : ${(props) => props.theme.primary}}
`