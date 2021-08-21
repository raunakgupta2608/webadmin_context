import React, { createContext, useState, useEffect } from 'react';

const initalState = {
    token: "none"
};

export const Context = createContext();

function tokenSetting() {
    const local = localStorage.getItem("token");
    
    if(local) {
        return JSON.parse(local);
    }
    else{
        return initalState;
    }
}

const Store = ({ children }) => {
    const [state, setState] = useState(tokenSetting());

    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(state));
    }, [state]);

    return (
        <>
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
        </>
    );
}
 
export default Store;