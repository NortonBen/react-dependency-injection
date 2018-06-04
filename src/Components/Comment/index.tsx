// @flow
import * as React from 'react';

class Comment extends React.Component {

  renderHeader() {
    return (
      <div className="article-reply-form">
      <div className="section-title">
        <h2 className="title">Bình Luận</h2>
      </div>
      <form>
        <textarea className="input" placeholder="Message" />
        <button className="input-btn">Bình Luận</button>
      </form>
    </div>
    )
  }

  renderBody() {
    return (
      <div className="article-comments">
      <div className="media">
        <div className="media-left">
          <img src="img/av-1.jpg" alt="" />
        </div>
        <div className="media-body">
          <div className="media-heading">
            <h5>Norton <span className="reply-time">May 04, 2018 At 9:30 AM</span></h5>
          </div>
          <p>Bạn sẽ thấy có nhiều định nghĩa từ hai lúa cho đến hàn lâm cho khái niệm CI/CD.</p>				
        </div>
      </div>
    </div>
    )
  }

  render() {
    return [
      this.renderHeader(),
      // tslint:disable-next-line:jsx-key
      <hr/>,
      this.renderBody()
    ]
  }
}

export default Comment;