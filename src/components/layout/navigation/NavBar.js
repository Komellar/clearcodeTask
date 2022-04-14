import * as S from "./NavBarStyled";

const NavBar = () => {
  return (
    <S.Bar>
      <S.Info>
        <S.Logo to="/">Rootsly</S.Logo>
        <S.Divider />
        <S.Description>Explore your relationships</S.Description>
      </S.Info>
      <S.User>
        <S.UserImg src="https://minimaltoolkit.com/images/randomdata/male/24.jpg" />
        <S.UserName>John Doe</S.UserName>
      </S.User>
    </S.Bar>
  );
};

export default NavBar;
