
function Contact() {
    return(
        <div className="containerContact">
            <form className="form-contact">
                <h2 className="heading">CONTACT US</h2>          
                <h3 className="heading">If you have any questions, feel free to send us a message.</h3>
                <h3 className="heading">We look forward to hearing from you!</h3>
                <input type="text" placeholder="Name"/>     
                <input type="email" placeholder="Email"/>        
                <input type="text" placeholder="Phone Number"/>       
                <button className="buttons btn-contact">Submit</button>        
            </form>        
        </div>
    )
}

export default Contact;