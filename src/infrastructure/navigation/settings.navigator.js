import React from "react";

import {
    createStackNavigator,
} from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator headerMode="screen">
            <SettingsStack.Screen
                name="Settings 1"
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                name="Favorites"
                component={FavoritesScreen}
            />
            <SettingsStack.Screen name="Camera" component={CameraScreen} />
        </SettingsStack.Navigator>
    );
};

