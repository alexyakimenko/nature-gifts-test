import styled from "styled-components";

export const NavbarWrapper = styled.div`
    position: fixed;
    box-sizing: content-box;

    bottom: 0;

    width: 100%;
    height: 67px;

    background-color: #fff;
    border-top: 1px var(--secondary-nav-color) solid;
`

export const Navbar = styled.nav`
    height: 100%;
`

export const NavbarItems = styled.ul`
    display: flex;

    justify-content: space-between;
    align-items: center;

    height: 100%;   

    list-style-type: none;
`