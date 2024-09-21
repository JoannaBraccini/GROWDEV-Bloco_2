import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--default-font);

  .wrapper {
    background-color: #ffff;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
