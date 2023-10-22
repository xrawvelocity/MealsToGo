import { locations } from './location.mock'
import camelize from 'camelize';

export const locationsRequest = (searchTerm = "") => {
    return new Promise((resolve, reject) => {
        const mockLocations = locations[searchTerm];
        if (!mockLocations) {
            reject("not found");
        }
        resolve(mockLocations)
    })
}


export const locationTransform = (result) => {
    const { geometry = {} } = camelize(result.results[0]);
    const { lat, lng } = geometry.location;

    return { lat, lng, viewport: geometry.viewport }
}

