const baseURL = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}`;


export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=true`);

    return await response.json();
}

export const getWeatherDataForLocation = async (lat, long) => {
    const response = await fetch(`${baseURL}&q=${lat},${long}&aqi=true`);

    return await response.json();
}