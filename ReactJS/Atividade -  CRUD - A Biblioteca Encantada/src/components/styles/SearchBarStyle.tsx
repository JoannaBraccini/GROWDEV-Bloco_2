import styled from "styled-components";

export const SearchBarStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  form {
    opacity: 0.7;
    display: flex;
    width: 100%;
    align-items: center;
  }

  input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ebbdbf;
    border-radius: 20px;
    outline: none;
    transition: border-bottom-color 0.3s ease, border-right-color 0.3s ease;

    &:focus {
      border-bottom: 2px solid #cf9795;
      border-right: 2px solid #cf9795;
    }
  }

  .search-icon {
    padding: 10px;
    margin-left: -40px;
    background-color: #cf9795;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: auto;
    }

    &:hover {
      background-color: #ebaba2;
    }
  }
`;
