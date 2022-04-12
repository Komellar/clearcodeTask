import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Friends from "./pages/Friends";

import "./styles.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  </Router>
);

export default App;
