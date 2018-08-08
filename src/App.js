import React from 'react';
import {Button, InputItem,  WhiteSpace} from 'antd-mobile';
import {Route, Link, BrowserRouter} from 'react-router-dom';

import Application from './components/application';
import Submit from './components/submite';
import SuccessPage from './components/successPage';
class App extends React.Component {
  render () {
    return (
      <div>
      <BrowserRouter>
      <div>
        <Route path="/submit" component={Submit}></Route>
        <Route path="/application" component={Application}></Route>
        <Route path="/successpage" component={SuccessPage}></Route>
        </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
