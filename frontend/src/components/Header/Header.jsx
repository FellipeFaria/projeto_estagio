import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../../contexts/ThemeContext";
import { FaShoppingCart, FaChartLine } from "react-icons/fa";
import Logo from "./components/Logo.jsx";
import SearchForm from "./components/SearchForm.jsx";
import Button from "../Button.jsx";
import ThemeChanger from "./components/ThemeChanger.jsx";
import { SearchContext } from "../../contexts/SearchContext.jsx";

const HeaderContainer = styled.header`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 50;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`;

function Header() {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { themeName, changeTheme } = useTheme();
  const themeMenuRef = useRef(null);

  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setIsThemeMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
      setIsThemeMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo navigate={navigate} />

      <HeaderActions>
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Button
          variant="primary"
          icon={<FaShoppingCart />}
          onClick={() => navigate("/vendas")}
        >
          Vendas
        </Button>

        <Button
          variant="success"
          icon={<FaChartLine />}
          onClick={() => navigate("/estatisticas")}
        >
          Estatísticas
        </Button>

        <ThemeChanger
          themeMenuRef={themeMenuRef}
          setIsThemeMenuOpen={setIsThemeMenuOpen}
          isThemeMenuOpen={isThemeMenuOpen}
          themeName={themeName}
          handleThemeChange={handleThemeChange}
        />
      </HeaderActions>
    </HeaderContainer>
  );
}

export default Header;
