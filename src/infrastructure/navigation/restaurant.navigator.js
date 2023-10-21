import React from "react";

import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "../../components/typography/text.component";
// import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantDetailScreen = () => {
    return <Text>Detail</Text>
}

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{
                headerShown: false,
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