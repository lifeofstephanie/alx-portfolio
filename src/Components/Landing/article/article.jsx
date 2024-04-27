// import { Link } from 'react-router-dom';
import './article.css'
import landing from '../../../assets/landing2.jpg'
const Article = ()=>{
    return(
        <div className="article">
           <div className="left-side">
            <h3>Navigate Your Career Journey With Confidence</h3>
            <p>Chart Your Course to Success Today and Embark on a Journey of Personal Achievement, and Endless Possibilities in Your Career Path</p>
            <div className="buttom buttons">
                <button>Explore Jobs</button>
                <button>Career Resources</button>
            </div>
           </div>
           <div className="right-side">
            <img src={landing} alt="" />
           </div>
        </div>
    )
}
export default Article;