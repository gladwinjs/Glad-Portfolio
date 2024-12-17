import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #007bff;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;

  a {
    color: #ffdd57;
    text-decoration: none;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 Gladwin. Copy Rights @ SahayaGladwin JS</p>
    <p>
      <a href="https://github.com/gladwinjs" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>{" "}
      |{" "}
      <a href="https://www.linkedin.com/in/sahayagladwinjs/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
