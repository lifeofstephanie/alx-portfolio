import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './login.css'
import { useState } from 'react'
const Login = ()=>{
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const[job, setJob] = useState('I am a Job Seeker')
    const handleLogin = ()=>{
        setLoading(true)
        setTimeout(()=>{
            if(2+2===4){
                setSuccess(true);
                if(job === 'I am a Job Seeker'){
                    navigate('/employee', {replace:true})
                }else{
                    navigate('/employer', {replace:true})
                }
            }
            else{
                setError(true);
            }
            setTimeout(()=>{
                setLoading(false)
                setSuccess(false)
                setError(false)
            }, 2000)
        },2000)
    }
    return(
        <div className="login">
            <div className="form">
            <div className="start">
                <Link to='/'><img src={logo} alt="" /></Link>
                <h2>Login</h2>
            </div>
            <div className="details">
                <form action="">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <select  value={job} onChange={(e)=>setJob(e.target.value)}>
                        <option>I am a Job Seeker</option>
                        <option value="">I am an Employer</option>
                    </select>
                    <div className="accept">
                        <input type="checkbox" name="" id="" />
                        <p>I accept the terms and conditions</p>
                    </div>
                    <Link><button className='login-button' onClick={handleLogin} style={{transform:loading ? 'scale:(0.95)':'scale(1)', boxShadow: loading ? '0px 0px 10px rgba(0,0,0,0.2':'none'}}>{loading ? (<div><svg>{}</svg><span>Logging in</span></div>):(<span>Log In</span>)}</button></Link>
                    {success && (
                        <div className='error-success'><svg>{}</svg>
                        <span style={{color:'#33cc99'}}>Logged In Successfully</span>
                        </div>
                    )}
                    {error && (
                        <div className='error-success'>
                            <svg>{}</svg>
                            <span style={{color:'red'}}>Log In failed. Please Try Again</span>
                        </div>
                    )}
                    <p className='signup'>Don't have an account? Sign Up <Link to='/signup'> here</Link></p>
                </form>
                
            </div>
            </div>
        </div>
    )
}

export default Login