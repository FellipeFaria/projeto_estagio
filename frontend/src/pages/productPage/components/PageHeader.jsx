import styled from "styled-components";
import Button from "../../../components/Button.jsx";
import { FaPlus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 170vh;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }
`;

function PageHeader() {
  return (
    <Container>
      <h1>Produtos</h1>
      <Button variant="primary" icon={<FaPlus />}>
        Novo Produto
      </Button>
    </Container>
  );
}

export default PageHeader;
