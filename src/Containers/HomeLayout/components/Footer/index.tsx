// @flow
import * as React from 'react';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

class Footer extends React.Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(
        <footer id="footer">
            <TopFooter />
            <BottomFooter />
        </footer>
    );
  }
}

export default Footer;