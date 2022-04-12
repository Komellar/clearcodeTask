import styled from "styled-components";

export const MainButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
  padding: 0.6em 3.2em;
  cursor: pointer;

  background: ${(props) =>
    props.secondary
      ? "#fff"
      : "linear-gradient(90deg, #f2709c 0%, #ff9472 100%)"};
  border-radius: 8px;
  border: ${(props) => (props.secondary ? "1px solid #f2709c" : "none")};

  color: ${(props) => (props.secondary ? "#F2709C" : "#fff")};
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 16px;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
`;

export const PendingButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.45em 0.65em;
  cursor: pointer;

  background: ${(props) =>
    props.secondary
      ? "#fff"
      : "linear-gradient(90deg, #84FAB0 0%, #8FD3F4 100%);"};
  border-radius: 4px;
  border: ${(props) => (props.secondary ? "1px solid #E9E9E9" : "none")};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

  color: ${(props) => (props.secondary ? "#6F6F6F" : "#fff")};
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 8px;
  white-space: nowrap;
`;
