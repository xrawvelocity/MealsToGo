import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    }

    const removeFavorite = (restaurant) => {
        setFavorites(favorites.filter(item => item.placeId !== restaurant.placeId));
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}