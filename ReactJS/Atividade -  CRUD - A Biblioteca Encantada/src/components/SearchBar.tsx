import { useState } from "react";
import { SearchBarStyle } from "./styles/SearchBarStyle";
import searchIcon from "../assets/search-book.svg";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState("");

  // Verificar se o texto de pesquisa não está vazio tanto no enter quanto no click
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchText.trim()) {
      onSearch(searchText);
    }
  };
  const handleSearchClick = () => {
    if (searchText.trim()) {
      onSearch(searchText);
    }
  };

  return (
    <SearchBarStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar um livro..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="search-icon" onClick={handleSearchClick}>
          <img src={searchIcon} alt="Buscar" />
        </div>
      </form>
    </SearchBarStyle>
  );
}
