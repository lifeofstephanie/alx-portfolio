import Navbar from "../Nabvar/Navbar";
import "./Employee.css";
import hero from "../../assets/hero2.png";
import profile from "../../assets/profile.png";
import Bloglist from "../JobList";
import { useEffect, useState } from "react";
import jobs from "../../data/jobs";

const Employee = () => {
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
  return (
    <div className="employee">
      <div className="hero">
        <div className="left">
          <Navbar />
          <div className="text">
            <h3>
              Searching for a job? Find the <b>best startup</b> job that fits
              you
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
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={hero} alt="" className="hero-image" />
          <img src={profile} alt="" className="profile" />
        </div>
      </div>
      <div>{<Bloglist jobs={jobsData} title="Job List" />}</div>
      {/* <ul>
        {filteredJobs.map(job=>(
          <li key={job.id}>{job.Title}</li>
        ))} */}
      {/* </ul> */}
      {/* <Bloglist/> */}
    </div>
  );
};
export default Employee;
