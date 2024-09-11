import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    color: #2e3064;
    border-radius: 5px;
    width: 100%;
    font-size: 14px;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
  button {
    align-self: flex-start;
  }
`;
