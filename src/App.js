import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { friendsActions } from "./store/slices/friends-slice";
import friendsService from "./services/friendsService";

import Home from "./pages/Home";
import Friends from "./pages/Friends";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    friendsService.getList().then((result) => {
      dispatch(friendsActions.setPeople(result));
    });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </Router>
  );
};

export default App;
