import styled from "styled-components";
import PageHeader from "./components/PageHeader.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ProductForm from "./components/ProductForm.jsx";
import { getProduct } from "../../services/api.js";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext.jsx";

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
  flex-wrap: wrap;
`;

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [onEdit, setOnEdit] = useState(null);

  const { searchTerm } = useContext(SearchContext);

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

  const filtredProducts = products.filter((product) =>
    product.nome_produto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <h1>Carregando Produtos...</h1>;
  }

  return (
    <Container>
      <PageHeader setIsFormOpen={setIsFormOpen} isFormOpen={isFormOpen} />

      {!isFormOpen ? (
        <ProductGrid>
          {filtredProducts.length > 0 ? (
            filtredProducts.map((product) => (
              <ProductCard
                key={product.id_produto}
                product={product}
                setOnEdit={setOnEdit}
                setIsFormOpen={setIsFormOpen}
                isFormOpen={isFormOpen}
                loadProducts={loadProducts}
              />
            ))
          ) : (
            <h1>Nenhum produto encontrado</h1>
          )}
        </ProductGrid>
      ) : (
        <ProductForm
          setIsFormOpen={setIsFormOpen}
          isFormOpen={isFormOpen}
          loadProducts={loadProducts}
          onEdit={onEdit}
          setOnEdit={setOnEdit}
        />
      )}
    </Container>
  );
}

export default ProductPage;
