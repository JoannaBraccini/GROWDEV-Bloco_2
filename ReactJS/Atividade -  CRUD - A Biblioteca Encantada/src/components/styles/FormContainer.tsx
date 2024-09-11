import styled from "styled-components";
type TButtonAlign = "center" | "flex-end" | "flex-start";
interface FormProps {
  buttonAlign?: TButtonAlign;
}
export const FormContainer = styled.form<FormProps>`
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
    border-radius: 5px;
    width: 100%;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
  .buttons {
    padding: 0;
    display: flex;
    flex-direction: row;
    align-self: ${(props) => props.buttonAlign || "center"};
    gap: 10px;
  }
`;
