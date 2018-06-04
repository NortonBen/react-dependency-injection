import * as React from 'react';

interface IMiddwareProps { routes: any[] }

class Middware extends React.Component<IMiddwareProps, { }> {

    
  static defaultProps: IMiddwareProps = {
    routes: []
  };

  render() {
    return this.props.children;
  }
}

export default Middware;