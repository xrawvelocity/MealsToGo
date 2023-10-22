import React, { useContext, useState } from "react"
import { FlatList, Pressable } from 'react-native';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-are.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { Loading } from "../../../components/utility/loading.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

export const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, isLoading } = useContext(RestaurantsContext);
    const [favoritesToggled, setFavoritesToggled] = useState(false);

    return (
        <SafeArea>
            <Search
                favoritesToggled={favoritesToggled}
                onFavoritesToggled={() => setFavoritesToggled(!favoritesToggled)}
            />
            {favoritesToggled && <FavoritesBar navigation={navigation} />}
            {isLoading ?
                <Loading size={50} animating={true} color={"tomato"} />
                :
                <FlatList
                    overScrollMode="never"
                    bounce={false}
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
