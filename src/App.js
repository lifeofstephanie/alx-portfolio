import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Landing/home";
import Login from "./Components/Login page/login";
import Signup from "./Components/Sign up page/signup";
import Employee from "./Components/home-employee/Employee";
// import BlogDetails from "./Components/BlogDetails";
import JobDetails from "./Components/JobDetails";
import Employer from "./Components/home-employer/Employer";
import Add from "./Components/home-employer/add-job";
import SidebarNav from "./Components/sidebar";
// import Nav from "./Components/nav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/employer/add" element={<Add/>}/>
        <Route path="/employer" element={<Employer/>}/>
        <Route path="/sidebar" element={<SidebarNav />} />
        {/* <Route path="/nav" element={<Nav />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
