import styled from "styled-components";
import Button from "../../../components/Button.jsx";
import { FaBoxes, FaChartBar, FaShoppingCart } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.default};
  font-weight: 600;
  line-height: 1.5;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;
  }
`;

function QuickActions({ navigate }) {
  return (
    <Container>
      <div>
        <Button
          variant="primary"
          icon={<FaBoxes size={50} />}
          onClick={() => navigate("/produtos")}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            fontSize: "2rem",
          }}
        ></Button>
        <span>Produtos</span>
      </div>
      <div>
        <Button
          variant="primary"
          icon={<FaShoppingCart size={50} />}
          onClick={() => navigate("/vendas")}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            fontSize: "2rem",
          }}
        ></Button>
        <span>Vendas</span>
      </div>
      <div>
        <Button
          variant="primary"
          icon={<FaChartBar size={50} />}
          onClick={() => navigate("/estatisticas")}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            fontSize: "2rem",
          }}
        ></Button>
        <span>Estástisticas</span>
      </div>
    </Container>
  );
}

export default QuickActions;
