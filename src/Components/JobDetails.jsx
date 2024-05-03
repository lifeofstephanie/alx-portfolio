import { Link, useParams } from "react-router-dom";
import jobs from "../data/jobs";
import { useEffect } from "react";
import "./CSS/BlogDetails.css";
// import SidebarNav from "./sidebar";


const JobDetails = () => {
  // return <h2>{job.Title}</h2>;
  const { id } = useParams();
  const job = jobs.find((job) => job.id === id);
  useEffect(() => {
    document.title = `${job.Title}`;
  }, [job]);
  const requirementsArray = job.Requirements
    ? job.Requirements.split(/,(\s+)/).map((requirement) => requirement.trim())
    : [];
  const DescriptionArray = job.Description
    ? job.Description.split(/;(\s+)/).map((description) => description.trim())
    : [];
  const JobDetailsContent = ({ jobs }) => {
    return (
      <div className="jobdetails">
        {/* <SidebarNav/> */}
        <div className="texts">
         <Link to='/employee'><div className="x"></div></Link> 
        {/* <Navbar/> */}
        <h2>{job.Title}</h2>
        <h3>{job.Employer}</h3>
        <div className="location">
          <p> {job.Duration}</p>
          <p>{job.Location}</p>
          <p>{job.Level} level</p>
        </div>
        <div className="ran_buttons">
          <button>Apply</button>
          <button>Save</button>
        </div>
        <h4>
          Comapny Overview:
        </h4>
        <p>{job.Company_Overview}</p>

        {/* <p>Job Description and Requiremenrs</p> */}
        <h4>Description and Responsibilities:</h4>
        <ul>
          {DescriptionArray.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
        <h4>Requirements:</h4>
        <ul>
          {requirementsArray.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul></div>
      </div>
    );
  };
  return (
    <div>
      {job ? (
        <JobDetailsContent job={job} />
      ) : (
        <div>Job with the given ID is not available</div>
      )}
    </div>
  );
};
export default JobDetails;
