function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="contact_bg">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <input
                    className="contactus"
                    placeholder="Name"
                    type="text"
                    name="Name"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <input
                    className="contactus"
                    placeholder="Phone"
                    type="text"
                    name="Email"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <input
                    className="contactus"
                    placeholder="Email"
                    type="text"
                    name="Email"
                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <textarea
                    className="textarea"
                    placeholder="Message"
                    type="text"
                    name="Message"
                  ></textarea>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button className="send">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
