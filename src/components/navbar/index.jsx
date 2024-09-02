import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NavbarWrapper, Navbar, NavbarItems } from "./Navbar.styled"
import NavbarItem from "./navbar-item"
import { Container } from "../layout/Container.styled"

import home from "../../assets/navbar/home.svg?react"
import search from "../../assets/navbar/search.svg?react"
import heart from "../../assets/navbar/heart.svg?react"
import cart from "../../assets/navbar/cart.svg?react"
import profile from "../../assets/navbar/profile.svg?react"


const NavbarComponent = () => {
  
  const location = useLocation();

  return (
    <NavbarWrapper>
      <Container>
        <Navbar>
            <NavbarItems>
                <li>
                  <Link to="/">
                    <NavbarItem element={home} active={location.pathname === "/"} />
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <NavbarItem element={search} active={false} />
                  </a>
                </li>
                <li>
                  <Link to="/favorites">
                    <NavbarItem element={heart} active={location.pathname === "/favorites"} />
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <NavbarItem element={cart} active={false} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <NavbarItem element={profile} active={false} />
                  </a>
                </li>
            </NavbarItems>
        </Navbar>
      </Container>
    </NavbarWrapper>
  )
}

export default NavbarComponent