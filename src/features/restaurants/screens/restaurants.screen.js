import React, { useContext } from "react"
import { View, FlatList } from 'react-native';
import { ActivityIndicator, Searchbar, Colors } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { list } from "../../../data/list"
import { SafeArea } from "../../../utils/safe-are.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled(View)`
    padding: 0 0 ${({ theme }) => theme.space[4]} 0;
    justify-content: center;
`;

const Loading = styled(ActivityIndicator)`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -5px;
`

export const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </SearchContainer>
            {isLoading ?
                <Loading size={50} animating={true} color={"tomato"} />
                :
                <FlatList
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            <RestaurantInfoCard restaurant={{ ...item }} />
                        )
                    }
                    }
                    keyExtractor={item => item.id}
                />}
        </SafeArea>
    )
}
