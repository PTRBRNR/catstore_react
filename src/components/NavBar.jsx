import styled from "styled-components";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Nav = styled.nav`
  width: 100vw;
  height: 4rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  background-color: #540d6e;
`;

const NavBar = () => (
  <Nav>
    <Link className="linky" to="/cat-store">
      Cat Store
    </Link>
    <p className="catcy">😺</p>
    <Link className="linky" to="/cat-farm">
      Cat Farm
    </Link>
  </Nav>
);

export default NavBar;
