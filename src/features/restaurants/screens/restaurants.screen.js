import React, { useContext } from "react"
import { View, FlatList, Pressable } from 'react-native';
import { ActivityIndicator, Searchbar, Colors } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../utils/safe-are.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -5px;
`

export const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <Search />
            {isLoading ?
                <Loading size={50} animating={true} color={"tomato"} />
                :
                <FlatList
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            <Pressable onPress={() => navigation.navigate("RestaurantDetail")}>
                                <RestaurantInfoCard restaurant={{ ...item }} />

                            </Pressable>
                        )
                    }
                    }
                    keyExtractor={item => item.id}
                />}
        </SafeArea>
    )
}
