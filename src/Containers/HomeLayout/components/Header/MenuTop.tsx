// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

class MenuTop extends React.Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(
        <div id="top-header">
            <div className="container">
            <div className="header-links">
                <ul>
                <li><Link to="/phan-hoi">Phản hồi</Link></li>
                <li><Link to="/dang-nhap">Đăng nhập</Link></li>
                </ul>
            </div>
            <div className="header-social">
                <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                <li><a href="#"><i className="fa fa-youtube" /></a></li>
                </ul>
            </div>
            </div>
        </div>
    );
  }
}

export default MenuTop;