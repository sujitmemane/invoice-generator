import { createContext } from "react";

export const AppContext =  createContext()

import React from 'react'

const AppContextProvider = ({
    children
}) => {


    const appContextValue = {
       name:'SujitMemane'
    }

  return (
    <AppContext.Provider value={appContextValue}>
        {
            children
        }
    </AppContext.Provider>
  )
}

export default AppContextProvider