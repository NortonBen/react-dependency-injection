// @flow
import * as React from 'react';

class Breadcrumb extends React.Component {
  render() {
    return (
    	<ul className="article-breadcrumb">
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Công nghê</a></li>
        <li>AI của Google đã có khả năng tự xác định phương hướng như con vật.</li>
      </ul>
    )
  }
}

export default Breadcrumb;