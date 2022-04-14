import { createSlice } from "@reduxjs/toolkit";

const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    allPeople: []
  },
  reducers: {
    setPeople(state, action) {
      let unsortedList = [...action.payload];
      let sortedList = unsortedList.sort((a, b) =>
        a.status > b.status ? 1 : -1
      );
      state.allPeople = sortedList;
    },
    addToFriendsList(state, action) {
      const newFriend = action.payload;
      const personIndex = state.allPeople.findIndex(
        (friend) => friend.id === newFriend.id
      );

      state.allPeople[personIndex].status = "ACCEPTED";
    },
    removeFromFriendsList(state, action) {
      const personToRemove = action.payload;
      const personIndex = state.allPeople.findIndex(
        (friend) => friend.id === personToRemove.id
      );

      if (personIndex !== undefined) {
        state.allPeople = state.allPeople.filter(
          (person) => person.id !== personToRemove.id
        );
      }
    },
    resetState(state) {
      state.allPeople = [];
    }
  }
});

export const friendsActions = friendsSlice.actions;

export default friendsSlice;
