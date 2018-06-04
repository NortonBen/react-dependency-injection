// @flow
import * as React from 'react';

class Most extends React.Component {

  render() {
    return(
      <div className="widget">
          <div className="widget-title">
            <h2 className="title">Most Read</h2>
          </div>
          
          <div id="owl-carousel-3" className="owl-carousel owl-theme center-owl-nav">
            <article className="article">
              <div className="article-img">
                <a href="#">
                  <img src="/img/img-md-3.jpg" alt="" />
                </a>
                <ul className="article-info">
                  <li className="article-type"><i className="fa fa-file-text" /></li>
                </ul>
              </div>
              <div className="article-body">
                <h4 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h4>
                <ul className="article-meta">
                  <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                  <li><i className="fa fa-comments" /> 33</li>
                </ul>
              </div>
            </article>
            
            <article className="article">
              <div className="article-img">
                <a href="#">
                  <img src="/img/img-md-4.jpg" alt="" />
                </a>
                <ul className="article-info">
                  <li className="article-type"><i className="fa fa-file-text" /></li>
                </ul>
              </div>
              <div className="article-body">
                <h4 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h4>
                <ul className="article-meta">
                  <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                  <li><i className="fa fa-comments" /> 33</li>
                </ul>
              </div>
            </article>
          </div>
          
          <article className="article widget-article">
            <div className="article-img">
              <a href="#">
                <img src="/img/img-widget-1.jpg" alt="" />
              </a>
            </div>
            <div className="article-body">
              <h4 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h4>
              <ul className="article-meta">
                <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                <li><i className="fa fa-comments" /> 33</li>
              </ul>
            </div>
          </article>
          
          <article className="article widget-article">
            <div className="article-img">
              <a href="#">
                <img src="/img/img-widget-2.jpg" alt="" />
              </a>
            </div>
            <div className="article-body">
              <h4 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h4>
              <ul className="article-meta">
                <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                <li><i className="fa fa-comments" /> 33</li>
              </ul>
            </div>
          </article>
          
          <article className="article widget-article">
            <div className="article-img">
              <a href="#">
                <img src="/img/img-widget-3.jpg" alt="" />
              </a>
            </div>
            <div className="article-body">
              <h4 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h4>
              <ul className="article-meta">
                <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                <li><i className="fa fa-comments" /> 33</li>
              </ul>
            </div>
          </article>
        </div>
      );
  }
}

export default Most;