import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'
import Card from '../Card';

class Portofolio extends React.Component{
  state ={
    porto: [],
    porto1: [],
    loading: true
  }

  onChange = checked => {
    this.setState({loading: !checked})
  };

  componentDidMount(){
    axios.get('https://my-json-server.typicode.com/haengbok295/portofolio_api/portofolio')
    .then(res => {
      const porto = res.data;
      this.setState({porto});})

      axios.get('https://my-json-server.typicode.com/haengbok295/portofolio_api1/portofolio1')
      .then(res => {
        const porto1 = res.data;
        this.setState({porto1});})
  }

    render(){
        return(
            <div>
            <div>
                <Header/>
            </div>
            <div>
            <section className="pn-blog-area">        
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-heading text-center">
                      <h2>My Portofolio</h2>
                    </div>
                  </div>
                </div>
              </div>
              </section>
              <section className="section">
              <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 mb-4">
                      {this.state.porto.map(data =>
                        <Card judul = {data.judul} deskripsi = {data.deskripsi}/>
                      )}
                    </div>

                    <div className="col-lg-6 col-sm-6 mb-4">
                      {this.state.porto1.map(data =>
                        <Card judul = {data.judul} deskripsi = {data.deskripsi}/>
                      )}
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

export default Portofolio;