import { mocks, mockImages } from './mock/index'
import camelize from 'camelize';

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found");
        }
        resolve(mock)
    })
}


export const restaurantTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant, index) => {
        restaurant.photos = restaurant.photos.map(p => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        })

        return {
            ...restaurant,
            id: index,
            address: restaurant.vicinity,
            isOpenNow: restaurant.openening_hours && restaurant.openening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        }
    })
    return camelize(mappedResults)
}

