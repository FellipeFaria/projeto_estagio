import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "./contexts/ThemeContext"; // Seu ThemeProvider personalizado
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { theme as defaultTheme } from "./styles/theme.js"; // Seu tema padrão
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";

function App() {
  return (
    <ThemeProvider>
      <StyledThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
          </Routes>
        </Router>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
