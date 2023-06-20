const Contact = () => {
    return (
      <div>
          <div className="container">
              <div className="roe">
                  <div className="col-12 text-center my-5">
                      <h1>Contact Me</h1>
                  </div>
              </div>
          </div>
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5>Contact Me</h5>
                  <hr />
                  <div className="form-group text-start mb-2">
                    <label className="mb-1 ">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                  </div>
                  <div className="form-group text-start mb-2">
                    <label className="mb-1">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                  </div>
                  <div className="form-group text-start mb-2">
                    <label className="mb-1">Email Address</label>
                    <input type="text" className="form-control" placeholder="Enter Email Address" />
                  </div>
                  <div className="form-group text-start mb-2">
                    <label className="mb-1">Message</label>
                    <textarea rows="3" type="text" className="form-control" placeholder="Type your message..." />
                  </div>
                  <div className="form-group py-3">
                    <button type="button" className="btn btn-primary shadow w-100">
                      Send Message
                    </button>
                  </div>
                </div>
  
                <div className="col-md-6 border-start">
                  <h4 className="main-heading">Address Information</h4>
                  <div className="underline"></div>
                  <p>Nana Jusolihun</p>
                  <p>08123456789</p>
                  <p>email@gmail.com</p>
                  <p>I wish you all the best</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  