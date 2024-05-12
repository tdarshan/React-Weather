import { useWeather } from "../context/Weather"

const Input = () => {

    const weather = useWeather();

    return (
        <>
            <input
                placeholder="Search City"
                type="text"
                value={weather.searchCity || ""}
                onChange={(e) => weather.setSearchCity(e.target.value)}
                className="input-field"
            />
        </>
    )
}

export default Input