import styled from "styled-components";

interface TitleProps {
  fontSize?: string;
}

export const Title = styled.h1<TitleProps>`
  font-family: "Rancho", cursive;
  font-size: 42px;
  text-align: center;
  letter-spacing: 2px;

  font-size: ${(props) => props.fontSize || "42px"};
`;
