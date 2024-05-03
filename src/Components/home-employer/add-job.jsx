import { useState } from "react"
// import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Add = ()=>{
    const [title, setTitle]= useState('')
    const [employer, setEmployer] = useState('')
    const [level, setLevel] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [requirements, setRequirements] = useState('')
    const [overview, setOverview] = useState('')
    const [isPending, setIsPending] = useState(false)

    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const job = {title, employer, level, location, description, requirements, overview};

        setIsPending(true);
        fetch('../../data/jobs.js', {
            method:'POST',
            headers:{'Content-type': 'application/javascript'},
            body:job
        }).then(()=>{
            console.log('New blog added');

            navigate.push('/employer')
        })

    }
    return(
        <div className="employer">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Job Title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Job Description:</label>
                <textarea required value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                <label>Job Employer:</label>
                <input type="text" required value={employer} onChange={(e)=>setEmployer(e.target.value)}/>
                {!isPending && <button>Add Job</button>}
                {isPending && <button disabled>Adding Blog.....</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{ author }</p> */}
            </form>
        </div>
    )
}
export default Add