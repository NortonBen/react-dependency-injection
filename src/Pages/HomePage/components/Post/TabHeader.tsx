// @flow
import * as React from 'react';

interface ITabHeaderProps { category: any, active: any, onClick: any, key: number }

class TabHeader extends React.Component<ITabHeaderProps, {}> {

  static defaultProps = {};
  static propTypes = {};

  onClick(event: any): any {
    event.preventDefault()
    const category = this.props.category;
    this.props.onClick(category.id);
  }


  render() {
      let className = ""
      const category = this.props.category;
      if (this.props.active === category.id) {
        className = "active"
      }
    return (
        // tslint:disable-next-line:jsx-no-bind
        <li className={className} ><a onClick={this.onClick.bind(this) } href="#">{ category.name }</a></li>
    )
  }
}

export default TabHeader;