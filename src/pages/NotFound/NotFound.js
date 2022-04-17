import * as S from "./NotFoundStyled.jsx";
import NavBar from "../../components/layout/navigation/NavBar";

const NotFound = () => (
  <>
    <NavBar />
    <S.Center>
      <S.Text>Page not found</S.Text>
    </S.Center>
  </>
);

export default NotFound;
