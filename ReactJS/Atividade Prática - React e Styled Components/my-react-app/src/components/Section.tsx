import styled from "styled-components";

type TFlexDirection = "row" | "row-reverse";

interface SectionProps {
  flexDirection: TFlexDirection;
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  max-height: 720px;
  display: flex;
  overflow-y: scroll;
  flex-direction: ${(props) =>
    props.flexDirection === "row" ? "row" : "row-reverse"};

  div {
    width: 50%;
    padding: 7rem;

    h2 {
      padding: 0.5rem 0;
    }
  }

  img {
    width: 50%;
    height: auto;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    div,
    img {
      width: 100%;
      padding: 2rem;
      height: 50%;
    }
  }
  @media (max-width: 768px) {
  }
`;
