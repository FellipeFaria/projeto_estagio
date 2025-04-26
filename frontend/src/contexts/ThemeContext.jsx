import React, { createContext, useContext, useEffect, useState } from "react";
import {
  theme as defaultTheme,
  highContrastTheme,
  deuteranopiaTheme,
  tritanopiaTheme,
} from "../styles/theme.js";
import styled from "styled-components";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [themeName, setThemeName] = useState("padrao");

  const changeTheme = (name) => {
    switch (name) {
      case "alto-contraste":
        setTheme(highContrastTheme);
        setThemeName("alto-contraste");
        break;
      case "deuteranopia":
        setTheme(deuteranopiaTheme);
        setThemeName("deuteranopia");
        break;
      case "tritanopia":
        setTheme(tritanopiaTheme);
        setThemeName("tritanopia");
        break;
      default:
        setTheme(defaultTheme);
        setThemeName("padrao");
    }
    localStorage.setItem("theme", name);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "padrao";
    changeTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeName, changeTheme }}>
      <ThemeWrapper theme={theme}>{children}</ThemeWrapper>
    </ThemeContext.Provider>
  );
};

const ThemeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
