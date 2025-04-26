import styled from "styled-components";
import { FaRocket } from "react-icons/fa";
import Button from "../../../components/Button.jsx";

const Container = styled.div`
  display: flex;
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.textLight};
    max-width: 600px;
    margin: 0 auto 2rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

function TitleSection({ navigate }) {
  return (
    <Container>
      <h1>Bem-vindo ao FelpsCommerce</h1>
      <p>
        Sistema completo de gestão de vendas para o seu negócio. Gerencie
        produtos, vendas e acompanhe estástisticas em tempo real
      </p>
      <Button
        variant="primary"
        icon={<FaRocket />}
        onClick={() => navigate("/produtos")}
        style={{ width: "200px" }}
      >
        Começar Agora
      </Button>
    </Container>
  );
}

export default TitleSection;
