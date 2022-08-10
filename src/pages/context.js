// context (warehouse -> All Data)
// Provider (Delivery Boy)
// Consumer or useContext() (Get Data)

import React,{useContext} from 'react';

const AppContext = React.createContext();

// need to create a provider function
const AppProvider = ({ children }) => {
    return <AppContext.Provider value="Pavan Yadav">
        {children}
    </AppContext.Provider>
};

//Global custom hooks
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider,useGlobalContext };