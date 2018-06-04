// @flow
import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface IMainHomeProps {  children: any[] }

class MainHome extends React.Component<IMainHomeProps, {}> {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return [
      <Header key="header"/>,
        this.props.children ,
      <Footer key="footer"/>
    ]
  }
}

export default MainHome;