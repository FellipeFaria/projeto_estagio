import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { theme as defaultTheme } from "./styles/theme.js";
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import ProductPage from "./pages/productPage/ProductPage.jsx";
import { SearchProvider } from "./contexts/SearchContext.jsx";
import Notifications from "./components/Notifications/Notification.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <StyledThemeProvider theme={defaultTheme}>
          <SearchProvider>
            <GlobalStyle />
            <Router>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/produtos" element={<ProductPage />} />
                </Route>
              </Routes>
              <Notifications />
            </Router>
          </SearchProvider>
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
