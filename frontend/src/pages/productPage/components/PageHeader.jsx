import styled from "styled-components";
import Button from "../../../components/Button.jsx";
import { FaPlus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }

  .btn {
    transform: translateX(-45px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .btn {
      transform: translateX(0);
    }
  }
`;

function PageHeader({ setIsFormOpen }) {
  return (
    <Container>
      <h1>Produtos</h1>
      <Button
        variant="primary"
        icon={<FaPlus />}
        onClick={() => setIsFormOpen(true)}
        className="btn"
      >
        Novo Produto
      </Button>
    </Container>
  );
}

export default PageHeader;
