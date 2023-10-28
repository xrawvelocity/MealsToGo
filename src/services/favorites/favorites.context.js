import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const { user } = React.useContext(AuthenticationContext);

    const addFavorite = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    }

    const removeFavorite = (restaurant) => {
        setFavorites(favorites.filter(item => item.placeId !== restaurant.placeId));
    }

    const saveFavorites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
        } catch (e) {
            console.log("error storing", e);
        }
    };

    const loadFavorites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favorites-${uid}`);
            if (value !== null) {
                setFavorites(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading", e);
        }
    };

    useEffect(() => {
        if (user && user.uid) {
            loadFavorites(user.uid);
        }
    }, [user]);

    useEffect(() => {
        if (user && user.uid && favorites.length) {
            saveFavorites(favorites, user.uid);
        }
    }, [favorites, user]);

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}