// context (warehouse -> All Data)
// Provider (Delivery Boy)
// Consumer or useContext() (Get Data)

import React from 'react';

const AppContext = React.createContext();

// need to create a provider function
const AppProvider = ({ children }) => {
    return <AppContext.Provider value="Pavan Yadav">
        {children}
    </AppContext.Provider>
};

export { AppContext, AppProvider };