import React, { useContext } from 'react';
import { Context } from '../Store';
import CoolComponent from './CoolComponent';
import Login from './Login';

const Routing = () => {
    const [token, setToken] =  useContext(Context);
    return (  
    <>
    {
        token.token !== "none" ?
        <>
            <CoolComponent/>
        </>
        :
        <>
            <Login/>
        </>
    }
    </>
    );
}
 
export default Routing;