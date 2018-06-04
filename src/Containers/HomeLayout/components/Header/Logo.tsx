// @flow
import * as React from 'react';

class Logo extends React.Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(
        <div id="center-header">
            <div className="container">
                <div className="header-logo">
                <h1>ITNEWS</h1>
                </div>
                <div className="header-ads">
                    {/* ads */}
                </div>
            </div>
        </div>
    );
  }
}

export default Logo;