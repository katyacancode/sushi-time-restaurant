import image from "./reserve-table.jpg";

function Reservations() {
    return(
        <div className="containerAbout">            
            <img className="reserve-img" src={image} alt="sushi" width="600px"/>        

            <form className="form-reserve">
                <h1 className="heading">RESERVE A TABLE</h1>            
                <input type="text" placeholder="Number of People"/>           
                <input type="text" placeholder="Date"/>            
                <input type="text"  placeholder="Time"/>        
                <button className="buttons btn-reserve">Reserve now</button>        
            </form>
        </div>        
    )
}

export default Reservations;