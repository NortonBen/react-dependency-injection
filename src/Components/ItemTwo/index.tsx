// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import "../Banner/slick/slick.css"; 
import "../Banner/slick/slick-theme.css";

interface ItemTwoProps { data: any, className: string, key: number }

export default class ItemTwo extends React.Component<ItemTwoProps, {}> {
  
  static defaultProps = {};

	static propTypes = {};
	
	renderMeta() {
		const { date, count_comment } = this.props.data;
		return (
			<ul className="article-meta">
				<li><i className="fa fa-clock-o"/>  { date }</li>
				<li><i className="fa fa-comments"/>  { count_comment }</li>
			</ul>
		)
	}

	renderInfo() {
		return (
			<ul className="article-info">
				<li className="article-category"><a href="#">News</a></li>
				<li className="article-type"><i className="fa fa-file-text"/> </li>
			</ul>
		)
	}

	renderImg() {
		const { image, link } = this.props.data;
		return (
			<div className="article-img">
					<Link to={link}>
					<img src={image} alt="" />
				</Link>
			</div>
		)
	}

	renderTitle() {
		const { title, link } = this.props.data;
		return (
			<h4 className="article-title">
				<Link to={link}>
					{ title }
				</Link>
			</h4>
		)
	}

	renderDescription() {
		const { description } = this.props.data;
		return (
			<p>
				{ description }
			</p>
		)
	}

  render() {
		const className = `article ${this.props.className}`;
    return (
		<article key={this.props.key}  className={className}>
			{ this.renderImg() }
			<div className="article-body">
				{ this.renderInfo() }
				{ this.renderTitle() }
				{ this.renderMeta() }
			</div>
		</article>
    )
  }
}