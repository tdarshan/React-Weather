/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}


export const WeatherProvider = (props) => {

    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState('');

    const fetchData = async() => {
        const response = await getWeatherDataForCity(searchCity);

        setData(response);
    }


    const fetchCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition( async(position) => {
            const {latitude, longitude} = position.coords;

            // console.log(latitude, longitude);
            await getWeatherDataForLocation(latitude, longitude)
                .then((data) => setData(data));
        });
    }


    return <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData, fetchCurrentLocation}}>
        {props.children}
    </WeatherContext.Provider>
}