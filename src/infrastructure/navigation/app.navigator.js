import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeArea } from "../../components/utility/safe-are.components.js";
import { Text } from "../../components/typography/text.component.js";
import { RestaurantsNavigator } from "./restaurant.navigator.js";
import styled from "styled-components";
import { MapScreen } from "../../features/map/screens/map.screen.js";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context.js";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context.js";
import { LocationContextProvider } from "../../services/location/location.context.js";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context.js";
import { SettingsScreen } from "../../features/settings/screens/settings.screen.js";

const TabsContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.bg.primary};
    height: 100%;
    width: 100%;
`

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings"
}

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name]
    return {
        tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: { position: 'absolute', height: 70, paddingBottom: 10 },
        tabBarBackground: () => (
            <TabsContainer />
        ),
    }
}

export const AppNavigator = () => {
    return (
        <FavoritesContextProvider>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <Tab.Navigator screenOptions={createScreenOptions}>
                        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{ headerShown: false }} />
                        <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
                        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
                    </Tab.Navigator>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavoritesContextProvider>
    )
}