import styled from "styled-components";
import { FaStore } from "react-icons/fa";

const Container = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }
`;

function Logo({ navigate }) {
  return (
    <Container onClick={() => navigate("/home")}>
      <FaStore />
      <span>FelpsCommerce</span>
    </Container>
  );
}

export default Logo;
