import React, { useContext } from "react"
import { FlatList, Pressable } from 'react-native';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-are.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { Loading } from "../../../components/utility/loading.component";

export const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, isLoading } = useContext(RestaurantsContext);

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
                            <Pressable onPress={() => navigation.navigate("RestaurantDetail", { restaurant: { ...item }, isLoading })}>
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
