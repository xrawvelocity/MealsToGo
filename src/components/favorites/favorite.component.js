import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const FavoriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 99;
`

export const Favorite = ({ restaurant }) => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.find((each) => each.placeId === restaurant.placeId);

    return (
        <FavoriteButton
            onPress={() =>
                !isFavorite
                    ? addFavorite(restaurant)
                    : removeFavorite(restaurant)
            }
        >
            <FontAwesome
                name={isFavorite ? "heart" : "heart-o"}
                size={24}
                color={isFavorite ? "red" : "white"}
            />
        </FavoriteButton>
    )
}