// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom'

interface IRenderRouterProps { 
  routes: any[]
}

class RenderRouter extends React.Component<IRenderRouterProps, {}> {
  
  static defaultProps: IRenderRouterProps = {
    routes: [],
  };

  
  renderRoutes = () => {
    const list: any[] = [];
    this.props.routes.forEach((item, j) =>  
    {
      item.routes.forEach((route: any, i: number) =>  {
        // tslint:disable-next-line:jsx-no-lambda
        list.push((<Route  path={route.path} key={i+j} { ...route.option } render={(props: object) => (
          <item.layout >
            { !item.middware && (<route.component {...props} routes={route.routes}/>) }
            { item.middware && (
              <item.middware>
                <route.component {...props} routes={route.routes}/>
              </item.middware>
              ) }
          </item.layout>
        )}/>));
      })
    })
    return list;
  }

  render() {
    return(
      <Switch>
        { this.renderRoutes() }
        { this.props.children }
      </Switch>
    );
  }
}

export default RenderRouter;