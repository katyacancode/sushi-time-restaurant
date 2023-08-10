
function Contact() {
    return(
        <div className="containerContact">
            <form className="form-contact">
                <h1 className="heading">CONTACT US</h1>          
                <p className="heading">If you have any questions, feel free to send us a message.</p>
                <p className="heading">We look forward to hearing from you!</p>
                <input type="text" placeholder="Name"/>     
                <input type="email" placeholder="Email"/>        
                <input type="text" placeholder="Phone Number"/>       
                <button className="buttons btn-contact">Submit</button>        
            </form>        
        </div>
    )
}

export default Contact;