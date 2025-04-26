import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${({ theme }) => theme.radii.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.9rem;
  transition: ${({ theme }) => theme.transitions.default};
  background-color: ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`;

function SearchForm({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Procurar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
    </form>
  );
}

export default SearchForm;
