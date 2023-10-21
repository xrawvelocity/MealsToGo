import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native';
import { SafeArea } from "../../utils/safe-are.components.js";
import { Text } from "../../components/typography/text.component.js";
import { RestaurantsNavigator } from "./restaurant.navigator.js";

const Map = () => {
    return (
        <SafeArea>
            <Text>Map</Text>
        </SafeArea>
    )
}

const Settings = () => {
    return (
        <SafeArea>
            <Text>Settings</Text>
        </SafeArea>
    )
}

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
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { position: 'absolute', height: 70, paddingBottom: 10 },
        tabBarBackground: () => (
            <View style={StyleSheet.absoluteFill} />
        ),
    }
}

export const AppNavigator = () => {
    return (
        <NavigationContainer style={{ padding: 30 }}>
            <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{ headerShown: false }} />
                <Tab.Screen name="Map" component={Map} options={{ headerShown: false }} />
                <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}