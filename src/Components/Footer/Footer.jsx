import { FooterContainer, FooterLinks, FooterText } from "./StyledComponents";

const Footer = () => {
    return (
      <FooterContainer>
        <FooterLinks>
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="mailto:yourmail@gmail.com">Gmail</a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </FooterLinks>
        <FooterText>© {new Date().getFullYear()} My Portfolio. All rights reserved.</FooterText>
      </FooterContainer>
    );
  };
  
  export default Footer;