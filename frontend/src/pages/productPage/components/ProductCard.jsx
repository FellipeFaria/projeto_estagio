import { FaBox, FaEdit, FaTrash, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import Button from "../../../components/Button.jsx";
import { deleteProduct } from "../../../services/api.js";
import { notify } from "../../../components/Notifications/Notification.jsx";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.small};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  flex-direction: column;
  width: 350px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const CardIcon = styled.div`
  height: 180px;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textLight};
  position: relative;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

const CardContentPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardContentActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

function ProductCard({
  product,
  setOnEdit,
  setIsFormOpen,
  isFormOpen,
  loadProducts,
}) {
  const handleEdit = () => {
    setOnEdit(product);

    setIsFormOpen(!isFormOpen);
  };

  const handleDelete = async () => {
    try {
      if (window.confirm(`Deseja mesmo excluir ${product.nome_produto}?`)) {
        await deleteProduct(product.id_produto);
        notify(`${product.nome_produto} deletado com sucesso`, "success");
      }

      loadProducts();
    } catch (e) {
      console.error("Erro ao excluir produto ", e.message);
    }
  };

  return (
    <Card>
      <CardIcon>
        <FaBox size={70} />
      </CardIcon>

      <CardContent>
        <h3>{product.nome_produto}</h3>

        <CardContentPrice>
          R${product.preco_produto.toFixed(2)}
        </CardContentPrice>

        <CardContentActions>
          <Button
            variant="alert"
            icon={<FaEdit size={20} />}
            style={{ width: "7.5rem" }}
            onClick={handleEdit}
          ></Button>
          <Button
            variant="error"
            icon={<FaTrash size={20} />}
            style={{ width: "7.5rem" }}
            onClick={handleDelete}
          ></Button>
          <Button
            variant="success"
            icon={<FaCartPlus size={20} />}
            style={{ width: "7.5rem" }}
          ></Button>
        </CardContentActions>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
