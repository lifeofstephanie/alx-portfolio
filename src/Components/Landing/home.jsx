import { Link } from "react-router-dom"
import './home.css'
import logo from '../../assets/logo.jpg'
import Article from "./article/article"

const Home = ()=>{
    return (
        <div className="home">
            <div className="navbarr">
                <Link to='/'><div className="logo">
                    <img src={logo} alt="" />
                <h2>Career Compass</h2></div></Link>
                    <div className="top buttons">
                        <Link to='/login'><button className="first">Log In</button></Link>
                        <Link to='/signup'><button className="second">Get Started</button></Link>
                        
                </div>
            </div>
            <Article/>
        </div>
    )
}
export default Home