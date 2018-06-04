// @flow
import * as React from 'react';
import Slider from "react-slick";
import Item  from "../ItemOne";

import "./slick/slick.css"; 
import "./slick/slick-theme.css";

interface IBannerProps { datas: any[]; }

export default class Banner extends React.Component<IBannerProps, object> {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      // tslint:disable-next-line:object-literal-sort-keys
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            // tslint:disable-next-line:object-literal-sort-keys
            slidesToScroll: 2,
            infinite: true,
            autoplay: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            // tslint:disable-next-line:object-literal-sort-keys
            slidesToScroll: 1,
            initialSlide: 1,
            autoplay: true,
          }
        }
      ]
    };
    const datas = this.props.datas;
    return (
      <Slider {...settings}>

         {
           datas.map((item: any, key: number) => <Item key={key} data={item} className="thumb-article" />)
         }
			
        <article className="article thumb-article">
          <div className="article-img">
            <img src="./img/img-lg-3.jpg" alt=""/>
          </div>
          <div className="article-body">
            <ul className="article-info">
              <li className="article-category"><a href="#">News</a></li>
              <li className="article-type"><i className="fa fa-camera"/></li>
            </ul>
            <h2 className="article-title"><a href="#">Hướng dẫn cài lại WordPress khi bị dính mã độc</a></h2>
            <ul className="article-meta">
              <li><i className="fa fa-clock-o"/> January 31, 2017</li>
              <li><i className="fa fa-comments"/> 33</li>
            </ul>
          </div>
        </article>
      </Slider>
    )
  }
}