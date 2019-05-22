import React from 'react'

class Card extends React.Component{

    render(){
        return(
            <div>
                <section className="pn-blog-area">        
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-lg-10">
                        <div className="single-blog-post mb-80">
                          <div className="post-content">
                            <a href="./Portofolio" className="post-title">{this.props.judul}</a>
                            <p>{this.props.deskripsi}</p>
                            <a href="./Portofolio" className="read-more-btn">Read More <i className="arrow_carrot-2right" /></a>
                          </div>
                        </div>
                      </div>
                      </div>
                      </div>
                      </section>
                  </div>
        );
    }
}

export default Card;