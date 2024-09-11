import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px;

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    th,
    td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      border-radius: 20px;
    }

    .buttons {
      display: flex;
      justify-content: center;
    }

    th {
      background-color: #f4f4f4;
      font-family: var(--title-font);
      font-size: 30px;
      flex-wrap: nowrap;
    }

    tr {
      font-family: var(--text-font);
    }
  }
`;
