// @flow
import * as React from 'react';
import CategoryService from '../../../../Modules/CategoryService';
import { provide } from 'inversify-react';
import { Link } from 'react-router-dom';

interface INavigationsState { categories: any[] }

class Navigations extends React.Component<{}, INavigationsState> {

  @provide
  categoryService: CategoryService;

  UNSAFE_componentWillMount() {
   this.categoryService.getlist().subscribe((value: any[]) => this.setState({ categories: value }));
  }

  // tslint:disable-next-line:member-ordering
  state: INavigationsState = {
    categories: []
  }

  renderNav() {
    return this.state.categories.map((item: any , key: number)=> {

      return (
        <li key={key} ><Link to={ "/danh-muc/"+ item.id } >{ item.name }</Link></li>
      )
    })
  }

  render() {
   
    return(
      <div id="nav-header">
        <div className="container">
          <nav id="main-nav">
            <div className="nav-logo">
              <a href="#" className="logo"><img src="./img/logo-alt.png" alt="" /></a>
            </div>
            <ul className="main-nav nav navbar-nav">
              <li className="active"><Link to="/">Trang Chủ</Link></li>
              { this.renderNav() }
              <li><Link to="/khoa-hoc">Khóa học</Link></li>
              <li><Link to="/kiem-tra">Kiểm Tra</Link></li>
            </ul>
          </nav>
          <div className="button-nav">
            <button className="search-collapse-btn"><i className="fa fa-search" /></button>
            <button className="nav-collapse-btn"><i className="fa fa-bars" /></button>
            <div className="search-form">
              <form>
                <input className="input" type="text" name="search" placeholder="Search" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigations;