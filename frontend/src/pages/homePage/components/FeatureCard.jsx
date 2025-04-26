import styled from "styled-components";
import { FaArrowRight, FaBoxOpen } from "react-icons/fa";
import Button from "../../../components/Button";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.large};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: ${({ theme }) => theme.transitions.default};
  text-align: center;
  width: 1fr;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 1.5rem;
  }
`;

const CardIconContainer = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

function FeatureCard({ navigate, icon, ...props }) {
  return (
    <Card>
      <CardIconContainer>{icon}</CardIconContainer>

      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <Button
        isIcon={false}
        onClick={() => navigate(props.link)}
        style={{
          background: `#f8fafc`,
          border: `1px solid #6366f1`,
          boxShadow: `0 1px 3px #6366f1`,
          color: `#4f46e5`,
        }}
      >
        {props.btnText}
        <FaArrowRight />
      </Button>
    </Card>
  );
}

export default FeatureCard;
