import Navbar from "../Nabvar/Navbar";
import "./Employee.css";
import hero from '../../assets/hero2.png'
import profile from '../../assets/profile.png'
import useFetch from "../Usefetch";
import Bloglist from "../BlogList";
// import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

const Employee = () => {
  const {data : jobs, isPending, error} = useFetch('http://localhost:8000/jobs/')
  

    // const[jobs, setJobs] = useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:8000/jobs/')
  //   .then(response => response.json())
  //   .then(data=>setJobs(data))
  // }, [])
  return (
    <div className="employee">
      <div className="hero">
        <div className="left">
          <Navbar />
          <div className="text">
            <h3>
              Searching for a job? Fund the <b>best startup</b> job that fits
              you
            </h3>
            <div className="filter">
            <input type="search" name="" id="" placeholder="search"/>
            <input type="search" name="" id="" placeholder="countries" />
            <button >Search</button>
          </div>
          </div>
          
        </div>
        <div className="right">
          <img src={hero} alt=""  className="hero-image"/>
          <img src={profile} alt=""  className="profile"/>
        </div>
      </div>
      <div >
      {error && <div>{error}</div>}
      {isPending && <div>Loading ... </div>}
      {jobs && <Bloglist jobs = {jobs} title = "Job List"/>}
      </div>
      {/* <Bloglist/> */}
    </div>
  );
};
export default Employee;
