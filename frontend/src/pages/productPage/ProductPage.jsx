import styled from "styled-components";
import PageHeader from "./components/PageHeader.jsx";
import ProductCard from "./components/ProductCard.jsx";
import { getProduct } from "../../services/api.js";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  width: 100%;
  align-items: center;
`;

const ProductGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await getProduct();

      const data = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res)
        ? res
        : [];

      setProducts(data);
    } catch (e) {
      console.error(e.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <h1>Carregando Produtos...</h1>;
  }

  return (
    <Container>
      <PageHeader />

      <ProductGrid>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id_produto}
              productName={product.nome_produto}
              price={product.preco_produto}
            />
          ))
        ) : (
          <h1>Nenhum produto cadastrado</h1>
        )}
      </ProductGrid>
    </Container>
  );
}

export default ProductPage;
