import styled from "styled-components";

export const SearchBar = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 46px 8px 16px;
  margin: ${(p) => (p.margin ? p.margin : "0")};

  width: 467px;
  height: 30px;

  background: #ffffff;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  border-radius: 4px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #585858;

  transition: box-shadow 200ms ease-out;

  &::placeholder {
    color: #898989;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 375px) {
    width: 80%;
  }
`;
