import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => (
  <Nav>
    <Logo>Sahaya Gladwin JS</Logo>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/education">Education</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </Nav>
);

export default Header;

const Nav = styled.nav`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  ul {
    display: flex;
    gap: 20px;

    li a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: #f39c12;
      }
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #f39c12;
`;
