import React, { useState, createContext, useEffect, useMemo } from 'react';
import { restaurantsRequest, restaurantTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantTransform)
                .then((transformedResponse) => {
                    setRestaurants(transformedResponse)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log('err', err)
                    setError(err)
                    setIsLoading(false)
                })
        }, 2000);
    }, [])

    return (
        <RestaurantsContext.Provider
            value={{ restaurants, isLoading, error }}
        >{children}</RestaurantsContext.Provider>)
}