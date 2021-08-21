import React from 'react';
import NavbarComponent from './NavbarComponent';
import SwitchCompute from './SwitchCompute';

const Routing = () => {
    
    return (  
    <>
        <NavbarComponent/>
        <SwitchCompute />
    </>
    );
}
 
export default Routing;

// {        
//     token.token !== "none" ?
//     <>
//         <CoolComponent/>
//     </>
//     :
//     <>
//         <SwitchCompute/>
//     </>
// }