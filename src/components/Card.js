import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
                            <a href="#" className="post-title">{this.props.judul}</a>
                            <p>{this.props.deskripsi}</p>
                            <a href="#" className="read-more-btn">Read More <i className="arrow_carrot-2right" /></a>
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