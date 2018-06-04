// @flow
import * as React from 'react';

interface IPostProps { datas: any[] }

export default class Post extends React.Component<IPostProps, {}> {
  
  static defaultProps = {};

  render() {

    return (
		<div className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div className="section-title">
						<h2 className="title">Popular Posts</h2>
					</div>
					
					<article className="article row-article">
						<div className="article-img">
							<a href="#">
								<img src="./img/img-md-1.jpg" alt="" />
							</a>
						</div>
						<div className="article-body">
							<ul className="article-info">
								<li className="article-category"><a href="#">News</a></li>
								<li className="article-type"><i className="fa fa-file-text" /></li>
							</ul>
							<h3 className="article-title"><a href="#">Hướng dẫn cài lại WordPress khi bị dính mã độc</a></h3>
							<ul className="article-meta">
								<li><i className="fa fa-clock-o" /> January 31, 2017</li>
								<li><i className="fa fa-comments" /> 33</li>
							</ul>
							<p>Sẽ cập nhật video sau. Việc website WordPress bị dính mã độc bởi việc sử dụng theme/plugin không rõ nguồn gốc (nếu không muốn nói là dùng lậu) hoặc đặt…</p>
						</div>
					</article>
					
					<article className="article row-article">
						<div className="article-img">
							<a href="#">
								<img src="./img/img-md-2.jpg" alt=""/>
							</a>
						</div>
						<div className="article-body">
							<ul className="article-info">
								<li className="article-category"><a href="#">News</a></li>
								<li className="article-type"><i className="fa fa-file-text" /></li>
							</ul>
							<h3 className="article-title"><a href="#">Hướng dẫn cài lại WordPress khi bị dính mã độc</a></h3>
							<ul className="article-meta">
								<li><i className="fa fa-clock-o" /> January 31, 2017</li>
								<li><i className="fa fa-comments" /> 33</li>
							</ul>
							<p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui.</p>
						</div>
					</article>
					
					<article className="article row-article">
						<div className="article-img">
							<a href="#">
								<img src="./img/img-md-3.jpg" alt="" />
							</a>
						</div>
						<div className="article-body">
							<ul className="article-info">
								<li className="article-category"><a href="#">News</a></li>
								<li className="article-type"><i className="fa fa-file-text" /></li>
							</ul>
							<h3 className="article-title"><a href="#">Hướng dẫn cài lại WordPress khi bị dính mã độc</a></h3>
							<ul className="article-meta">
								<li><i className="fa fa-clock-o" /> January 31, 2017</li>
								<li><i className="fa fa-comments" /> 33</li>
							</ul>
							<p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui.</p>
						</div>
					</article>
					
					<article className="article row-article">
						<div className="article-img">
							<a href="#">
								<img src="./img/img-md-4.jpg" alt="" />
							</a>
						</div>
						<div className="article-body">
							<ul className="article-info">
								<li className="article-category"><a href="#">News</a></li>
								<li className="article-type"><i className="fa fa-file-text" /></li>
							</ul>
							<h3 className="article-title"><a href="#">Hướng dẫn cài lại WordPress khi bị dính mã độc</a></h3>
							<ul className="article-meta">
								<li><i className="fa fa-clock-o" /> January 31, 2017</li>
								<li><i className="fa fa-comments" /> 33</li>
							</ul>
							<p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui.</p>
						</div>
					</article>
					
					<div className="article-pagination">
						<ul> 
							<li className="active"><a href="#" className="active">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#"><i className="fa fa-angle-right" /></a></li>
						</ul>
					</div>
				</div>
				
				<div className="col-md-4">
					<div className="widget">
						<div className="widget-title">
							<h2 className="title">Featured Posts</h2>
						</div>
						
						<div id="owl-carousel-4" className="owl-carousel owl-theme">
							<article className="article thumb-article">
								<div className="article-img">
									<img src="./img/img-thumb-1.jpg" alt="" />
								</div>
								<div className="article-body">
									<ul className="article-info">
										<li className="article-category"><a href="#">News</a></li>
										<li className="article-type"><i className="fa fa-video-camera" /></li>
									</ul>
									<h3 className="article-title"><a href="#">Hướng dẫn cài lại WordPress khi bị dính mã độc</a></h3>
									<ul className="article-meta">
										<li><i className="fa fa-clock-o" /> January 31, 2017</li>
										<li><i className="fa fa-comments" /> 33</li>
									</ul>
								</div>
							</article>
						
							<article className="article thumb-article">
								<div className="article-img">
									<img src="./img/img-thumb-2.jpg" alt="" />
								</div>
								<div className="article-body">
									<ul className="article-info">
										<li className="article-category"><a href="#">News</a></li>
										<li className="article-type"><i className="fa fa-video-camera" /></li>
									</ul>
									<h3 className="article-title"><a href="#">Hướng dẫn cài lại WordPress khi bị dính mã độc</a></h3>
									<ul className="article-meta">
										<li><i className="fa fa-clock-o" /> January 31, 2017</li>
										<li><i className="fa fa-comments" /> 33</li>
									</ul>
								</div>
							</article>
						</div>
					</div>
					
					<div className="widget tweets-widget">
						<div className="widget-title">
							<h2 className="title">Recent Tweets</h2>
						</div>
						<ul>
							<li className="tweet">
								<i className="fa fa-twitter" />
								<div className="tweet-body">
									<p><a href="#">@magnews</a> Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis <a href="#">https://t.co/DwsTbsmxTP</a></p>
								</div>
							</li>
							<li className="tweet">
								<i className="fa fa-twitter" />
								<div className="tweet-body">
									<p><a href="#">@magnews</a> Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis <a href="#">https://t.co/DwsTbsmxTP</a></p>
								</div>
							</li>
							<li className="tweet">
								<i className="fa fa-twitter" />
								<div className="tweet-body">
									<p><a href="#">@magnews</a> Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis <a href="#">https://t.co/DwsTbsmxTP</a></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
  }
}