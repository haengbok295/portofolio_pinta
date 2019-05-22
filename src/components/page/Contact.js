import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Contact extends React.Component{
    render(){
        return(
            <div>
            <div>
                <Header/>
            </div>
            <div>
                <section className="pn-contact-area section-padding-80">
                  <div className="container">
                    <div className="row justify-content-between">
                      <div className="col-12 col-lg-8">
                        <div className="uza-contact-form mb-80">
                          <div className="contact-heading mb-50">
                            <h4>감사합니다 for your interest</h4>
                            <h5>Fill out the form below to inquire about me</h5>
                          </div>
                          <form action="#" method="post">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input type="text" className="form-control mb-30" name="full-name" placeholder="Name" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input type="email" className="form-control mb-30" name="email" placeholder="Email" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input type="text" className="form-control mb-30" name="full-name" placeholder="Phone" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input type="text" className="form-control mb-30" name="full-name" placeholder="Profession" />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <textarea className="form-control mb-30" name="message" rows={8} cols={80} placeholder="Message" defaultValue={""} />
                                </div>
                              </div>
                              <div className="col-12">
                                <a href="./Contact" className="btn pn-btn btn-2 mt-4">Contact Me</a>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-12 col-lg-3">
                        <div className="contact-sidebar-area mb-80">
                          <div className="single-contact-card mb-50">
                            <h4>Contact Me</h4>
                            <h3>083862918039</h3>
                            <h6>pintasarinug@gmail.com</h6>
                            <h6>pintasari.n@mail.ugm.ac.id</h6>
                            <h6>Mon - Fri: 8:00 - 16:00 <br />Closed on Weekends</h6>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
      </div>  
      <div>
          <Footer/>
        </div>
      </div>
        );
    }
}

export default Contact;