import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigator = () => {
    const { isAuthenticated } = React.useContext(AuthenticationContext);

    return (
        <NavigationContainer style={{ padding: 30, border: 'none' }}>
            {isAuthenticated ? (<AppNavigator />) : (<AccountNavigator />)}
        </NavigationContainer>
    );
}