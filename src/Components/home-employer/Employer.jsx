import Navbar from "../Nabvar/Navbar"
import hero from "../../assets/hero2.png";
import profile from "../../assets/profile.png";
import Bloglist from "../JobList";
import jobs from "../../data/jobs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import '../home-employee/Employee.css'


const Employer=()=>{
    const [jobsData, setJobs] = useState(jobs);
  const [text, setText] = useState("");
  const textCHangeHandler = (event) => {
    setText(event.target.value);
  };

  const searchHandler = (searchTerm) => {
    setJobs(
      jobs.filter(
        (job) =>
          job.Title.includes(searchTerm) || job.Location.includes(searchTerm) ||  job.Employer.includes(searchTerm)
      )
    );
  };

  useEffect(() => {
    searchHandler(text);
    console.log(jobsData);
  }, [text]);
    return(
        <div className="employer">
        <div className="hero">
        <div className="left">
          <Navbar />
          <div className="text">
            <h3>
              Ready to Empower your startup? Find your <b>Ideal Match </b>Today
            </h3>
            <div className="filter">
              <input
                type="text"
                name=""
                id=""
                placeholder="search"
                value={text}
                onChange={textCHangeHandler}
                chan
              />
              <Link to='/employer/add'><button>Add Jobs</button></Link>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={hero} alt="" className="hero-image" />
          <img src={profile} alt="" className="profile" />
        </div>

      </div>
      <div>{<Bloglist jobs={jobsData} title="Job List" />}</div>
      
      </div>
    )
}
export default Employer