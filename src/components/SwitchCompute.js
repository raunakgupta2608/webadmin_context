
import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Context } from '../Store';
import Login from './Login';
import CoolComponent from './CoolComponent';
import Signup from './Signup';
import NotFound from './NotFound';

const SwitchCompute = () => {
    const [token, setToken] =  useContext(Context); 

    const history = useHistory();
    
    if(token.token === "none") {
        history.push('/login');
    }

  return (
    <Switch>
      <Route path="/login">
      {
        token.token === "none" ? 
        <Login/>
          : 
        <CoolComponent/>
      }
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/cool">
        <CoolComponent/>
      </Route>
      <Route component={NotFound}></Route>
    </Switch>
  )
};

export default SwitchCompute;
