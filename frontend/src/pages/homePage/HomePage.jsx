import TitleSection from "./components/TitleSection.jsx";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import QuickActions from "./components/QuickActions.jsx";
import FeatureCard from "./components/FeatureCard.jsx";
import { FaBoxOpen, FaCashRegister, FaChartPie } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 1rem;
    margin: 1rem auto;
  }
`;

const FeatureCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }
`;

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleSection navigate={navigate} />
      <QuickActions navigate={navigate} />

      <FeatureCardContainer>
        <FeatureCard
          icon={<FaBoxOpen />}
          title="Gestão de Produtos"
          description="Cadastre, edite e gerencie seu estoque de produtos de forma simples e intuitiva."
          btnText="Ver Produtos"
          link="/produtos"
          navigate={navigate("/produtos")}
        />
        <FeatureCard
          icon={<FaCashRegister />}
          title="Processo de vendas"
          description="Realize vendas rapidamente com nosso sistema otimizado para checkout."
          btnText="Realizar Venda"
          link="/vendas"
          navigate={navigate("/vendas")}
        />
        <FeatureCard
          icon={<FaChartPie />}
          title="Relatórios e Análises"
          description="Acompanhe o desempenho do seu negócio com gráficos e relatórios detalhados."
          btnText="Ver Estástisticas"
          link="/estatistica"
          navigate={navigate("/estatistica")}
        />
      </FeatureCardContainer>
    </Container>
  );
}

export default HomePage;
