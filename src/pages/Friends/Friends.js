import { useState } from "react";
import friendsService from "../../services/friendsService";

import * as S from "./FriendsStyled";
import { SearchBar } from "../../components/UI/SearchBar";
import NavBar from "../../components/layout/navigation/NavBar";
import Profile from "../../components/Profile/";

const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);

  friendsService.getList().then((result) => {
    console.log(result);
    setFriendsList(result);
  });
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
          {friendsList.map((person) => (
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
