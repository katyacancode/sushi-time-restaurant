import { useState } from "react";
import { Photos } from "./Photos.js";

function About() { 
    
    const [photo, setPhoto] = useState(0);
    const {img} = Photos[photo];
    const text = "Our chef came up from Japan to share with the guests the traditional Japanese sushi. If you would like to get a unique dining experience and spend time in a warm and comfortable atmosphere, welcome to SUSHI TIME!";
    const [showMore, setShowMore] = useState(false);

    const nextPhoto = () => {
        setPhoto((photo=> {
            photo++;
            if (photo > Photos.length -1){
                photo=0;
            }
            return photo;
        }))
    }

    const previousPhoto = () => {
        setPhoto((photo=> {
            photo--;
            if (photo < 0){
                return Photos.length -1;
            }
            return photo;
        }))
    }

    return(
    <div>
        <div className="containerContact">
            <h1 className="heading">ABOUT US</h1>
        </div>

        <div className="containerAbout">
            <div className="pictures">
                <button className="btnBackNext" onClick={previousPhoto}>〈</button>                       
                <img className="sushi-variety" onClick={nextPhoto} src={img} alt="sushi-restaurant" width="650px"/>
                <button className="btnBackNext" onClick={nextPhoto}>〉</button>
            </div>        
        
            <div className="about">            
                <p className="text">SU<span>SHI</span> TIME first opened in 2018 and located in the heart of Toronto Downtown.</p> 
                <p className="text">{showMore ? text : text.substring(0, 85)}</p>
                <button className="btnShowMore" onClick = {() => setShowMore(!showMore)}>{showMore ? "Read less" : "Read more"}</button>                
            </div> 
        </div> 
    </div>

    )
}

export default About;