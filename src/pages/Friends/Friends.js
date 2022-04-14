import * as S from "./FriendsStyled";
import { SearchBar } from "../../components/UI/SearchBar";
import NavBar from "../../components/layout/navigation/NavBar";
import Profile from "../../components/Profile/";
import { useSelector } from "react-redux";

const Friends = () => {
  const peopleList = useSelector((state) => state.friends.allPeople);

  console.log(peopleList);

  return (
    <>
      <NavBar />
      <S.Container>
        <SearchBar
          type="text"
          placeholder="Search by name"
          margin="94px 0 64px"
        />

        <S.Grid>
          {peopleList?.map((person) => (
            <Profile
              key={person.id}
              pending={person.status === "PENDING"}
              profile={person}
            />
          ))}
        </S.Grid>
      </S.Container>
    </>
  );
};

export default Friends;
