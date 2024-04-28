import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Landing/home";
import Login from "./Components/Login page/login";
import Signup from "./Components/Sign up page/signup";
import Employee from "./Components/home-employee/Employee";

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route  path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/employee" element={<Employee/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
