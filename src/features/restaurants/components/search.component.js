import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import styled from "styled-components/native";
import { View } from "react-native";

const SearchContainer = styled(View)`
    padding: 0 0 ${({ theme }) => theme.space[4]} 0;
    justify-content: center;
`;

export const Search = ({ favoritesToggled, onFavoritesToggled }) => {
    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar
                icon={favoritesToggled ? "heart" : "heart-outline"}
                onIconPress={onFavoritesToggled}
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    )
}