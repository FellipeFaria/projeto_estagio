import { FaDollarSign, FaSave, FaTag, FaTimes } from "react-icons/fa";
import Button from "../../../components/Button.jsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { addProduct, editProduct } from "../../../services/api.js";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  padding: 2rem;
`;

const FormHeader = styled.div`
  position: relative;
  margin-bottom: 2rem;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.25rem;
  padding: 0.5rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const InputWithIcon = styled.div`
  position: relative;

  .icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.textLight};
  }

  .form-control {
    padding-left: 2.5rem;
  }
`;

const FormControl = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.small};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};
  background-color: ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

function ProductForm({
  setIsFormOpen,
  isFormOpen,
  loadProducts,
  onEdit,
  setOnEdit,
}) {
  const [productData, setProductData] = useState({
    id_produto: 0,
    nome_produto: "",
    preco_produto: "",
  });

  useEffect(() => {
    if (onEdit) {
      setProductData(onEdit);
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        await editProduct(productData.id_produto, {
          nome_produto: productData.nome_produto,
          preco_produto: Number(productData.preco_produto),
        });
      } else {
        await addProduct({
          nome_produto: productData.nome_produto,
          preco_produto: Number(productData.preco_produto),
        });
      }

      setProductData({
        id_produto: 0,
        nome_produto: "",
        preco_produto: "",
      });

      setOnEdit(null);

      setIsFormOpen(!isFormOpen);
    } catch (e) {
      console.error("Erro detalhado:", e.response?.data || e.message);
    } finally {
      loadProducts();
    }
  };

  const cleanFormsAndExit = (e) => {
    e.preventDefault();

    setProductData({
      id_produto: 0,
      nome_produto: "",
      preco_produto: "",
    });

    if (onEdit) {
      setOnEdit(null);
    }

    setIsFormOpen(!isFormOpen);
  };

  return (
    <Container>
      <FormHeader>
        <CloseButton
          onClick={() => {
            if (onEdit) {
              setOnEdit(null);
            }

            setProductData({
              id_produto: 0,
              nome_produto: "",
              preco_produto: "",
            });

            setIsFormOpen(!isFormOpen);
          }}
        >
          <FaTimes />
        </CloseButton>
        <h1>Cadastrar Produto</h1>
        <p>Preencha os campos abaixo para cadastrar um novo produto</p>
      </FormHeader>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="nomeProduto">Nome do produto</label>

          <InputWithIcon>
            <FaTag className="icon" />
            <FormControl
              type="text"
              id="nomeProduto"
              className="form-control"
              placeholder="Ex: Camiseta Azul"
              value={productData.nome_produto}
              onChange={(e) =>
                setProductData({ ...productData, nome_produto: e.target.value })
              }
              required
            />
          </InputWithIcon>
        </FormGroup>

        <FormGroup>
          <label htmlFor="precoProduto">Preço do produto</label>

          <InputWithIcon>
            <FaDollarSign className="icon" />
            <FormControl
              type="number"
              id="precoProduto"
              className="form-control"
              placeholder="Ex: 29.99"
              value={productData.preco_produto}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  preco_produto: e.target.value,
                })
              }
              required
            />
          </InputWithIcon>
        </FormGroup>

        <FormActions>
          <Button
            variant="secondary"
            icon={<FaTimes />}
            onClick={cleanFormsAndExit}
          >
            Cancelar
          </Button>

          <Button variant="primary" icon={<FaSave />}>
            Salvar
          </Button>
        </FormActions>
      </form>
    </Container>
  );
}

export default ProductForm;
