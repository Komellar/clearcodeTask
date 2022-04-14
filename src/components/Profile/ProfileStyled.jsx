import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 189px;
  margin-top: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #ffffff;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media screen and (max-width: 320px) {
    width: 240px;
  }
`;

export const ProfileImage = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  left: calc(50% - 60px / 2);
  top: -30px;
  border-radius: 50%;
`;

export const ProfileName = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #585858;

  margin-top: 3em;
  margin-bottom: 0.4em;
  padding: 0;
`;

export const ProfileActions = styled.div`
  width: 95%;
  margin: ${(p) => (p.pending ? "0 auto" : "0.7em auto")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
