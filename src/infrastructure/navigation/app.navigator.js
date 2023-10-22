import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native';
import { SafeArea } from "../../components/utility/safe-are.components.js";
import { Text } from "../../components/typography/text.component.js";
import { RestaurantsNavigator } from "./restaurant.navigator.js";
import styled from "styled-components";
import { MapScreen } from "../../features/map/screens/map.screen.js";



const Settings = () => {
    return (
        <SafeArea>
            <Text>Settings</Text>
        </SafeArea>
    )
}

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
        <NavigationContainer style={{ padding: 30, border: 'none' }}>
            <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{ headerShown: false }} />
                <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}