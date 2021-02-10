import styled from 'styled-components';
import db from '../../../db.json'

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000080;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 78px;
    margin-right: 23px;
  }

  p {
    color: ${db.theme.colors.primary};
    text-align: center;
  }

  a {
    color: ${db.theme.colors.contrastTextLight};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a <a href="https://www.alura.com.br/"><span>Imersão React da Alura</span></a>
      </p>
    </FooterWrapper>
  );
}
