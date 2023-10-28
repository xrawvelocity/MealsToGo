import React from "react";

import {
    createStackNavigator,
} from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
            }}
        >
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                name="Favorites"
                component={FavoritesScreen}
            />
        </SettingsStack.Navigator>
    );
};