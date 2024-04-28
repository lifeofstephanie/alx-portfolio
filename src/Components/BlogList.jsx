import { Link } from 'react-router-dom';
import './home-employee/Employee.css'
const Bloglist =({jobs,title})=>{
    return(
        <div className="bloglist">
        <h1>{title}</h1>
        <hr />
          {jobs.map((job)=>(
            <div key={job.id} className="job-preview">
              <Link to={`/jobs/${job.id}`}><h2>{job.Title}</h2></Link>
              <p>{job.Employer}</p>
              <p>{job.Location}</p>
            </div>
          ))}
        </div>

    )
}
export default Bloglist;