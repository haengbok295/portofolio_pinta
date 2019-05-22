import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Propil from '../img/propil.webp'

class Profile extends React.Component{
    render(){
        return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
              <section className="pn-about-us-area">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="about-us-thumbnail mb-80">
                        <img src={Propil} alt="profil image" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="about-us-content mb-80">
                        <h2>About Me</h2>
                        <p>My name is Pintasari Nugraheni. I was born in Magelang on 29 October 1999. I am a cheerful person, always 
                          positive thinking and always spirited. I am a fourth semester student in D3 Computer
                          Science and Informatics System, Universitas Gadjah Mada, who has a high school graduate
                          background.</p>
                          <a href="./Profile" className="btn pn-btn btn-2 mt-4">Download CV</a>
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
        )
    }
}

export default Profile;