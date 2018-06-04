// @flow
import * as React from 'react';

class Tag extends React.Component {
  render() {
    return (
      <div className="widget-tags">
      <ul>
        <li><a href="#">Gitlab</a></li>
        <li><a href="#">Ci</a></li>
        <li><a href="#">Ci/Cd</a></li>
        <li><a href="#">git</a></li>
      </ul>
    </div>
    )
  }
}

export default Tag;