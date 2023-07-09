import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Items from "./components/Items";

function App() {
  return (
    <div className=" ">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/item" element={<Items />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
