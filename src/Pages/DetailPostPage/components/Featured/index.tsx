// @flow
import * as  React from 'react';
import Slider from "react-slick";

import "../../../../Components/Banner/slick/slick.css"; 
import "../../../../Components/Banner/slick/slick-theme.css";


class Featured extends React.Component {


  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      // tslint:disable-next-line:object-literal-sort-keys
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
    };
  

    return(
      <div className="widget">
          <div className="widget-title">
            <h2 className="title">Featured Posts</h2>
          </div>
          
          <Slider { ...settings }>
            <article className="article thumb-article">
              <div className="article-img">
                <img src="/img/img-thumb-1.jpg" alt="" />
              </div>
              <div className="article-body">
                <ul className="article-info">
                  <li className="article-category"><a href="#">News</a></li>
                  <li className="article-type"><i className="fa fa-video-camera" /></li>
                </ul>
                <h3 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h3>
                <ul className="article-meta">
                  <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                  <li><i className="fa fa-comments" /> 33</li>
                </ul>
              </div>
            </article>
          
            <article className="article thumb-article">
              <div className="article-img">
                <img src="/img/img-thumb-2.jpg" alt="" />
              </div>
              <div className="article-body">
                <ul className="article-info">
                  <li className="article-category"><a href="#">News</a></li>
                  <li className="article-type"><i className="fa fa-video-camera" /></li>
                </ul>
                <h3 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h3>
                <ul className="article-meta">
                  <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                  <li><i className="fa fa-comments" /> 33</li>
                </ul>
              </div>
            </article>
          </Slider>
        </div>
      );
  }
}

export default Featured;