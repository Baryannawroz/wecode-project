import "./App.css";
import Login from "./pages/LogIn";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div >
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
