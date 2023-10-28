import React, { useContext, useState } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "../typography/text.component";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";

const FavoritesWrapper = styled(View)`
  padding-bottom: ${({ theme }) => theme.space[3]};
`

export const FavoritesBar = ({ navigation }) => {
    const { favorites } = useContext(FavoritesContext);

    if (!favorites.length) {
        return null;
    }

    return (
        <FavoritesWrapper>
            <Spacer position="bottom" size="large">
                <Text variant="caption">Favorites</Text>
            </Spacer>
            <ScrollView overScrollMode="never" bounce={false} horizontal showsHorizontalScrollIndicator={false}>
                {favorites.map(restaurant => {
                    return (
                        <TouchableOpacity
                            key={restaurant.placeId}
                            onPress={() => {
                                navigation.navigate("RestaurantDetail", { restaurant })
                            }}
                        >
                            <Spacer position="right" size="large">
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </Spacer>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </FavoritesWrapper>
    );
};