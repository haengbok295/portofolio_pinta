import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Ha from '../img/ha.png'

class Home extends React.Component{
    render() {
        return (
            <div>
            <div>
                <Header/>
            </div>
            <div>
              <section className="pn-home-area">
                <div className="container">
                  <div className="row align-items-center">
                    {/* About Us Content */}
                    <div className="col-12 col-md-6">
                      <div className="home-content mb-80">
                        <h2>안녕하세요</h2>
                        <h3>Assalamualaikum</h3>
                        <p>Wlcome to Pinta's Website</p>
                        <Link to='/profile'>
                            <Button variant="outlined" color="secondary" className="button">
                                Profile
                            </Button>        
                        </Link>
                      </div>
                    </div>
                    {/* About Thumbnail */}
                    <div className="col-12 col-md-6">
                      <div className="home-thumbnail mb-80">
                        <img src={Ha} alt />
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

export default Home;
    