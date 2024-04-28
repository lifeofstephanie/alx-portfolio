import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './navbar.css'
const Navbar = ()=>{
    return(
        <div className="navbar">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <h2>Career Compass</h2>
                        </div>
                        <div className="links">
                            <Link to='/employee'>Home</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/resources'>Resources</Link>
                            <Link to='/socials'>Socials</Link>
                            <div className="animation start-home"></div>
                        </div>
                    </div>
    )
}
export default Navbar