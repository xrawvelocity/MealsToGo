import React, { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import styled from "styled-components/native";
import { View } from "react-native";

const SearchContainer = styled(View)`
    padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]} 0;
    margin-top: ${({ theme }) => theme.space[2]};
    justify-content: center;
    position: absolute;
    top: ${({ theme }) => theme.space[4]};
    width: 100%;
    z-index: 999;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = React.useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                icon="map"
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