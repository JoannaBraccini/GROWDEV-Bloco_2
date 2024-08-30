import styled from "styled-components";

interface ContainerProps {
  margin?: string;
  background?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;

  margin: ${(props) => props.margin};
  background-image: ${(props) => props.background};
`;
