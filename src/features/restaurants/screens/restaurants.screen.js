import React from "react"
import { View, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { list } from "../../../data/list"

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    flex-direction: column;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[3]};
    justify-content: center;
`;

const ListContainer = styled(FlatList)`

`;

export const RestaurantsScreen = () => {
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
            <ListContainer
                data={list}
                renderItem={({ item }) => {
                    return (
                        <RestaurantInfoCard restaurant={{ ...item }} />
                    )
                }
                }
                keyExtractor={item => item.id}
            />
        </SafeArea>
    )
}
