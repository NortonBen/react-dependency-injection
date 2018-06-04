// @flow
import  * as React from 'react';

class Subscribe extends React.Component {

  static defaultProps = {};
  static propTypes = {};

  render() {

    return (
        <div className="widget subscribe-widget">
            <div className="widget-title">
                <h2 className="title">Subscribe to Newslatter</h2>
            </div>
            <form>
                <input className="input" type="email" placeholder="Enter Your Email"/>
                <button className="input-btn">Subscribe</button>
            </form>
        </div>
    )
  }
}

export default Subscribe;