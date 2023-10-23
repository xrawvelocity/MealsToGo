import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    }

    const removeFavorite = (restaurant) => {
        setFavorites(favorites.filter(item => item.placeId !== restaurant.placeId));
    }

    const saveFavorites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favorites", jsonValue);
        } catch (e) {
            console.log("error storing", e);
        }
    };

    const loadFavorites = async () => {
        try {
            const value = await AsyncStorage.getItem("@favorites");
            if (value !== null) {
                setFavorites(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading", e);
        }
    };

    useEffect(() => {
        loadFavorites();
    }, []);

    useEffect(() => {
        saveFavorites(favorites);
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}