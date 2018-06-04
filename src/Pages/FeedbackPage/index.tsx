// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

class FeedbackPage extends React.Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="article-breadcrumb">
                <li><Link to="/">Trang chủ</Link></li>
                <li>Phản Hồi</li>
              </ul>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <div className="login-form">
                <div className="section-title">
                  <h2 className="title">Phản Hồi</h2>
                </div>
                <form className="col-md-10 col-md-offset-1">
                  <label>Họ Tên</label>
                  <div style={{ marginBottom: "20px" }}>
                    <input className="input" placeholder="Họ Tên" type="text" />
                  </div>
                  <label>Email</label>
                  <div style={{ marginBottom: "20px" }}>
                    <input className="input" placeholder="Name" type="email" />
                  </div>
                  <label>Tiêu Đề</label>
                  <div style={{ marginBottom: "20px" }}>
                    <input className="input" placeholder="Tiêu Đề" type="text"/>
                  </div>
                  <label >Nôi Dung</label>
                  <div style={{ marginBottom: "20px" }}>
                    <textarea className="input" placeholder="Nội dung" style={{ height: "100px" }} />
                  </div>
                  <button type="submit" className="input-btn" style={{ width: "100%" , marginBottom: "2px" }}>Phản hồi</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}


export default FeedbackPage;