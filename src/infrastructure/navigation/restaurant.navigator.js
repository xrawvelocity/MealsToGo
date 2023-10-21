import React from "react";

import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{
                presentation: "transparentModal",
                headerShown: false,
                gestureEnabled: true,
                gestureResponseDistance: 400,
                gestureVelocityImpact: 1,
                ...TransitionPresets.ModalPresentationIOS,
            }}
        >
            <RestaurantStack.Screen
                name="Restaurants 1"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};