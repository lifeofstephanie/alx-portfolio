import { Link } from "react-router-dom"
import './home.css'
import logo from '../../assets/logo.jpg'
import Article from "./article/article"

const Home = ()=>{
    return (
        <div className="home">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                <Link to='/'><h2>Career Compass</h2></Link></div>
                    <div className="top buttons">
                        <button>Log In</button>
                        <button>Get Started</button>
                        
                </div>
            </div>
            <Article/>
        </div>
    )
}
export default Home