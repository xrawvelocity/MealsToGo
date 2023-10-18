import React, { useState, createContext, useEffect, useMemo } from 'react';
import { locationTransform, locationsRequest } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("San Francisco")
    const [location, setLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
    }

    useEffect(() => {
        if (!keyword.length) {
            return;
        }
        locationsRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                setIsLoading(false)
                setLocation(result)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err)
            })
    }, [keyword])

    return (
        <LocationContext.Provider
            value={{ location, isLoading, error, search: onSearch, keyword }}
        >{children}</LocationContext.Provider>)
}