import * as S from "./FriendsStyled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { SearchBar } from "../../components/UI/SearchBar";
import NavBar from "../../components/layout/navigation/NavBar";
import Profile from "../../components/Profile/";

const searchVariants = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const Friends = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedPeople, setSearchedPeople] = useState([]);

  const peopleList = useSelector((state) => state.friends.allPeople);

  useEffect(() => {
    setSearchedPeople(
      peopleList?.filter(
        (person) =>
          (
            person.firstName?.toLowerCase().toString() +
            " " +
            person.lastName?.toLowerCase().toString()
          ).includes(searchValue.toLowerCase()) ||
          (
            person.lastName?.toLowerCase().toString() +
            " " +
            person.firstName?.toLowerCase().toString()
          ).includes(searchValue.toLowerCase())
      )
    );
  }, [peopleList, searchValue]);

  return (
    <>
      <NavBar />
      <S.Container>
        <SearchBar
          type="text"
          placeholder="Search by name"
          margin="94px 0 64px"
          onChange={(e) => setSearchValue(e.target.value.trim())}
          variants={searchVariants}
          initial="hidden"
          animate="visible"
        />

        <S.Grid>
          {searchedPeople?.map((person) => (
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
