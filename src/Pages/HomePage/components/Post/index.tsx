// @flow
import * as React from 'react';
import TabHeader  from './TabHeader';
import Tab  from './Tab';

interface IPostProps { categories: any[], datas: any[] }
interface IPostState { categories: any[], active: any }

export default class Post extends React.Component<IPostProps, IPostState> {
  
  static defaultProps = {};

  state: IPostState = {
    active: 0,
    categories: []
  }

  // tslint:disable-next-line:member-ordering
  static getDerivedStateFromProps(props: any, state: any) {
    const categories = Object.assign([], props.categories) ;
    categories.unshift({ id : 0, name: "Tât Cả" });
    state.categories = categories;
  }

  onClickTab(id: number) {
    this.setState( { active: id });
  }

  renderHeader() {
    return this.state.categories.map((item, key)  => {
      return (<TabHeader
        key={key}
        active={ this.state.active }
        // tslint:disable-next-line:jsx-no-bind
        onClick={this.onClickTab.bind(this)}
        category={item} />)
    })
  }

  renderContent() {
    return (<Tab
      active={ this.state.active }
      datas={this.props.datas}
      categories={this.state.categories} />)
  }

  render() {

    return (
      <div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title">
							<h2 className="title">Tất Cả</h2>
							<ul className="tab-nav pull-right">
                { this.renderHeader() }
							</ul>
						</div>
						
						<div className="tab-content">
              { this.renderContent() }
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}