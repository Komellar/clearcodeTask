import styled from "styled-components";
import { Link } from "react-router-dom";

export const Bar = styled.nav`
  width: 100%;
  height: 50px;
  background: linear-gradient(90deg, #f2709c 0%, #ff9472 100%);
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  @media screen and (max-width: 992px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 32px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: color 200ms ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }

  @media screen and (max-width: 320px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

export const Divider = styled.div`
  height: 50px;
  width: 2px;
  margin: 0 30px;
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 450px) {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const Description = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserImg = styled.img`
  width: 34px;
  height: 34px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  border: 2px solid #ffffff;
  border-radius: 50%;
  margin-right: 12px;

  @media screen and (max-width: 320px) {
    margin-right: 5px;
  }
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }

  @media screen and (max-width: 320px) {
    font-size: 13px;
    line-height: 14px;
  }
`;
