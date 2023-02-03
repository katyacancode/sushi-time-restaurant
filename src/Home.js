import image from "./sushi-photo.jpg";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="home-container">
            <div className="cont">
                <h1>SU<span>SHI</span> TIME</h1>
                <p className="text">There's always time for sushi!</p>
                <p className="text">We are open for dine-in, takeout and delivery.</p>
                <hr/>
                <Link to="/menu" className="view-menu">VIEW MENU</Link>
            </div>            
            
            <img className="sushi-image" src={image} alt="sushi" width="450px" />
            
        </div>
    )
}

export default Home;