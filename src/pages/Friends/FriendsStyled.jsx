import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 320px) {
    width: 95%;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2em;
  grid-row-gap: 1em;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2em;
    grid-row-gap: 1em;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 2em;
    grid-row-gap: 1em;
  }
`;
