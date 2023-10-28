import React from "react";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { SafeArea } from "../../../components/utility/safe-are.components";
import { Loading } from "../../../components/utility/loading.component";
import { FlatList } from "react-native-gesture-handler";
import { Pressable } from "react-native";

export const FavoritesScreen = ({ navigation }) => {
    const { favorites } = useContext(FavoritesContext);

    if (!favorites.length) {
        return null;
    }

    return (
        <SafeArea>
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