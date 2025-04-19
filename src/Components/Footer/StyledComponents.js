import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width : 100%;
  height : 120px;
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;

  display : flex;
  align-items : center;
  justify-content : center;
  gap : 10px;
`;

export const FooterLinks = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: #ccc;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

export const FooterText = styled.p`
  font-size: 1.2rem;
  color: #888;
   margin-bottom: 1rem;
`;