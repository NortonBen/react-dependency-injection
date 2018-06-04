import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'inversify-react';

import RenderRouter from './Components/RenderRouter';
import LanguageProvider from './Containers/LanguageProvider';
import routes from './routes';
import NotFound from './Pages/NotFound';
import "./App.css";
import Container from './container'



class App extends React.Component {
  render() {
    return (
      <Provider container={Container}>
        <LanguageProvider locale="vn">
          <Router>
            <RenderRouter routes={routes}>
              <Route component={NotFound}/>
            </RenderRouter>
          </Router>
        </LanguageProvider>
      </Provider>
    );
  }
}

export default App;
