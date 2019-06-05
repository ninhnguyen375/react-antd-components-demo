import React from 'react';
import './App.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './views/NotFound';
import Forms from './views/Forms';
import Buttons from './views/Buttons';
import About from './views/About';
import IconPage from './views/IconPage';
import Test from './views/test';

const App: React.FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Buttons} />
          <Route path='/about' exact component={About} />
          <Route path='/test' exact component={Test} />
          <Route path='/forms' component={Forms} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/icon' component={IconPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
