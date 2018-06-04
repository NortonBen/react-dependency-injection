// @flow
import 'reflect-metadata';
import * as React from 'react';
import './style.css';
import { provide } from 'inversify-react';
import AuthService from '../../Modules/AuthService';
import { Link} from 'react-router-dom';
import { Login } from '../../Models/Login';

interface ILoginPageState { 
  user: Login
}

class LoginPage extends React.Component<{}, ILoginPageState> {

  @provide.singleton
  authService: AuthService;

  UNSAFE_componentWillMount() {
    // code
  }
  
  // tslint:disable-next-line:member-ordering
  state: ILoginPageState = {
    user: {
      username: '',
      // tslint:disable-next-line:object-literal-sort-keys
      password: '',
    }
  }
  
  handleLogin = () => {
    // code
  }

  render() {
    return(
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="article-breadcrumb">
                <li><Link to="/">Trang chủ</Link></li>
                <li>Đăng Nhập</li>
              </ul>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <div className="login-form">
                <div className="section-title">
                  <h2 className="title">Đăng Nhập</h2>
                </div>
                <form className="col-md-8 col-md-offset-2">
                  <label>Email</label>
                  <div>
                    <input className="input" placeholder="Name" type="email" />
                  </div>
                  <label style={{ marginTop: "20px" }}>Mật khẩu</label>
                  <div>
                    <input className="input" placeholder="Email" type="password" style={{ marginBottom: "20px" }}/>
                  </div>
                  <button type="submit" className="input-btn" style={{ width: "100%" , marginBottom: "2px" }}>Đăng Nhập</button>
                  <p style={{ marginBottom: "2px", fontWeight: 600, textAlign: "center" }}>hoặc</p>
                  <div style={{ position: "relative" }}>
                      <i className="fa fa-facebook-square icon-fb" aria-hidden="true" />
                      <button type="button" className="btn-login-fb input-btn" style={{  backgroundColor: "#143571" }} >Đăng Nhập với Facebook</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default LoginPage;