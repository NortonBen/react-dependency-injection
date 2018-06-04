// @flow
import * as React from 'react';

class LanguageControl extends React.Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(
        <div>
          { this.props.children }
        </div>
    );
  }
}

export default LanguageControl;