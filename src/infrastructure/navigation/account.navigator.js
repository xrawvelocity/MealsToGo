import React from "react";

import {
    createStackNavigator,
} from "@react-navigation/stack";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <AccountStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AccountStack.Screen
                name="Account"
                component={AccountScreen}
            />
            <AccountStack.Screen
                name="Login"
                component={LoginScreen}
            />
            <AccountStack.Screen
                name="Register"
                component={RegisterScreen}
            />
        </AccountStack.Navigator>
    );
};