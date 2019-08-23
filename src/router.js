import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './pages/Index';
import BasicLayout from './components/BasicLayout';

export default function IRouter(){
  return (
    <Router>
      <Route path="/" render={()=>(
        <BasicLayout>
          <Switch>
            <Route path="/dashboard" component={Index}></Route>    
          </Switch>
        </BasicLayout>
      )}></Route>
    </Router>
  )
}