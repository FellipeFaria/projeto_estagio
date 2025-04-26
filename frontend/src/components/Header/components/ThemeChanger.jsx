import styled from "styled-components";
import Button from "../../Button.jsx";
import { FaCircle, FaPalette } from "react-icons/fa";

const ThemeMenu = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: ${({ theme }) => theme.shadows.card};
  z-index: 100;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 180px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-10px")});
  transition: ${({ theme }) => theme.transitions.default};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
`;

const ThemeButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ $active }) =>
    $active ? "rgba(99, 102, 241, 0.1)" : "none"};
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

function ThemeChanger({
  themeMenuRef,
  setIsThemeMenuOpen,
  isThemeMenuOpen,
  themeName,
  handleThemeChange,
}) {
  return (
    <div ref={themeMenuRef} style={{ position: "relative" }}>
      <Button
        variant={"ghost"}
        icon={<FaPalette size={20} />}
        onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
      />

      <ThemeMenu $isOpen={isThemeMenuOpen}>
        <ThemeButton
          $active={themeName === "padrao"}
          onClick={() => handleThemeChange("padrao")}
        >
          <FaCircle style={{ color: "#6366f1" }} />
          Padrão
        </ThemeButton>
        <ThemeButton
          onClick={() => handleThemeChange("alto-contraste")}
          $active={themeName === "alto-contraste"}
        >
          <FaCircle style={{ color: "#000" }} />
          Alto Contraste
        </ThemeButton>
        <ThemeButton
          onClick={() => handleThemeChange("deuteranopia")}
          $active={themeName === "deuteranopia"}
        >
          <FaCircle style={{ color: "#3366cc" }} />
          Deuteranopia
        </ThemeButton>
        <ThemeButton
          onClick={() => handleThemeChange("tritanopia")}
          $active={themeName === "tritanopia"}
        >
          <FaCircle style={{ color: "#cc3366" }} />
          Tritanopia
        </ThemeButton>
      </ThemeMenu>
    </div>
  );
}

export default ThemeChanger;
