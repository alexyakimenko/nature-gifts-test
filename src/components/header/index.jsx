import { Container } from "../layout/Container.styled"
import { HeaderWrapper, Header, Masthead, SearchBar, ProfileWrapper, SearchWrapper } from "./Header.styled"

import logo from "../../assets/header/logo.png"
import SearchIcon from "../../assets/header/search_icon.svg?react"
import ProfileIcon from "../../assets/navbar/profile.svg?react"
import IconLeft from "../../assets/header/icon_left.svg?react"
import { Link } from "react-router-dom"

const HeaderComponent = () => {
const path = import.meta.env.VITE_APP_PATH
  return (
    <HeaderWrapper>
        <Container>
            <Header>
                <Masthead>
                    <Link to={`${path}/`}>
                        <img src={logo} alt="Natures Gift Logo" />
                    </Link>
                    <ProfileWrapper href="#">
                        <ProfileIcon style={{
                            fill: "var(--second-accent-color)",
                            stroke: "var(--second-accent-color)"
                        }} />
                        <p>
                            Маргарита
                        </p>
                    </ProfileWrapper>
                </Masthead>
                <SearchBar>
                    <a href="#">
                        <IconLeft />
                    </a>
                    <SearchWrapper>
                        <SearchIcon />
                        <input type="text" placeholder="Название товара или ключевое слово"/>
                    </SearchWrapper>
                </SearchBar>
            </Header>
        </Container>
    </HeaderWrapper>    
  )
}

export default HeaderComponent