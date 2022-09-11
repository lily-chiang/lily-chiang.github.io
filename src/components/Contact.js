export default function Contact() {
    return (
        <div className="modal fade" id="contact" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="card">
            <div className="card-header"><h4>Contact Me</h4></div>
            <div className="card-body">
                <p>lilyc@vt.edu <br />
                   (571)279-2672</p>
                Or leave a message here:
                <br /><br />
                <p style={{color: "maroon", fontWeight: "bold"}}>Currently the form system is a work in progress, 
                    so this feature is disabled. Sorry for the inconvenience!</p>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" disabled="true"></input>
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your message here" disabled="true"></textarea>
                    </div>
                </form>
            </div>  
            </div>
        </div>
        </div>
        </div>
    );
}