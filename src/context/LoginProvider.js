




import React from 'react'
import LoginContext from './login'

export default function LoginProvider({ children }) {
    return (
        <LoginContext.Provider value={{
            userName: "Nermine",
        }}>
            {
                children
            }
        </LoginContext.Provider>
    )
}
