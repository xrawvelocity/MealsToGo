import React, { useState, createContext } from "react";

import { checkAuthState, loginRequest, logoutRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    checkAuthState(setUser)

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e);
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            setIsLoading(false);
            return;
        }
        registerRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onLogOut = () => {
        setIsLoading(true);
        logoutRequest()
            .then(() => {
                setUser(null);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e);
            });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogOut
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};