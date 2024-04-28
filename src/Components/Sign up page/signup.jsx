import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './signup.css'
import { useState } from 'react'
const Signup = ()=>{
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const handleLogin = ()=>{
        setLoading(true)
        setTimeout(()=>{
            if(2+2===4){
                setSuccess(true);
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
                <h2>SignUp</h2>
            </div>
            <div className="details">
                <form action="">
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <select>
                        <option value="">--Select One--</option>
                        <option>I am a Job Seeker</option>
                        <option value="">I am an Employer</option>
                    </select>
                    <div className="accept">
                        <input type="checkbox" name="" id="" />
                        <p>I accept the terms and conditions</p>
                    </div>
                    <Link><button className='login-button' onClick={handleLogin} style={{transform:loading ? 'scale:(0.95)':'scale(1)', boxShadow: loading ? '0px 0px 10px rgba(0,0,0,0.2':'none'}}>{loading ? (<div><svg>{}</svg><span>Signing up</span></div>):(<span>Sign Up</span>)}</button></Link>
                    {success && (
                        <div className='error-success'><svg>{}</svg>
                        <span >Signed Up Successfully</span>
                        </div>
                    )}
                    {error && (
                        <div className='error-success'>
                            <svg>{}</svg>
                            <span>Sign Up failed. Please Try Again</span>
                        </div>
                    )}
                    <p className='signup'>Already have an account? Log In <Link to='/login'> here</Link></p>
                </form>
                
            </div>
            </div>
        </div>
    )
}

export default Signup