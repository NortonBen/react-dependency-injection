// @flow
import * as React from 'react';
import Logo from './Logo';
import MenuTop from './MenuTop';
import Navigation from './Navigation';

class Header extends React.Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(
        <header id="header">
            <MenuTop />
            <Logo />
            <Navigation />
        </header>
    );
  }
}

export default Header;