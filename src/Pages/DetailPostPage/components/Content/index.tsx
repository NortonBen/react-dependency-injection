// @flow
import * as React from 'react';

class Content extends React.Component {
  render() {
    return(
		<article className="article article-post">
			<div className="article-share">
				<a href="#" className="facebook"><i className="fa fa-facebook" /></a>
				<a href="#" className="twitter"><i className="fa fa-twitter" /></a>
				<a href="#" className="google"><i className="fa fa-google-plus" /></a>
			</div>
			<div className="article-main-img">
				<img src="/img/AI.jpg" alt="" />
			</div>
			<div className="article-body">
				<ul className="article-info">
					<li className="article-category"><a href="#">News</a></li>
					<li className="article-type"><i className="fa fa-file-text" /></li>
				</ul>
				<h1 className="article-title">AI của Google đã có khả năng tự xác định phương hướng như con vật.</h1>
				<ul className="article-meta">
					<li><i className="fa fa-clock-o" /> April 04, 2017</li>
					<li><i className="fa fa-comments" /> 33</li>
				</ul>
			
			</div>
		</article>
      );
  }
}

export default Content;