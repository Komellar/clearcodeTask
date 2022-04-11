import friends from "../dataFixtures/friends";

export default {
  getList: () => Promise.resolve(friends)
};
