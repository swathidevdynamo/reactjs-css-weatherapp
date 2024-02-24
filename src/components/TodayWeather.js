import React, { useCallback, useState } from "react";
import "../style.css"
import perfectDay from "../images/perfect-day.svg"
import axios from "axios";
import { getIcon } from "../providers/iconsMap";
import Keys from "../utils/Utils";
import moment from "moment";

const CityComponent = () => {

    const currentDate = moment().format('ll');


    const [city, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [units, setUnits] = useState([
        {
            label: "Temp",
            value: "Temp"
        },
        {
            label: "°C",
            value: "metric"
        },
        {
            label: "°F",
            value: "imperial"
        }])
    const [value, setValue] = useState("");

    const [results, showResults] = useState(false);

    const fetchData = async () => {
        try {
            let units = !value ? "metric": value
            const response = await axios.get(
                `${Keys.BASE_URL}${city}&units=${units}&appid=${Keys.API_KEY}`
            );
            setWeatherData(response.data);
        } catch (error) {
            setErrorMsg(error.response.data.message)
        }
    };


    const handleClick = useCallback(() => {
        fetchData();
        showResults(true)
    }, [city, value]);


    return (
        <div className="card">
            {!results ? <div className="Layout">
                <div className="header">WEATHER FORECAST</div>
                <img src={perfectDay} className="weather-icon"></img>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'normal', padding: 30 }}>
                    <input type="text" placeholder="Enter city name" spellCheck="false"
                        onChange={(e) => setCityName(e.target.value)}>
                    </input>
                    <select
                        value={value}
                        onChange={(e) => {
                            setValue(e.currentTarget.value)
                        }}>
                        {units.map((unit) => (
                            <option key={unit.value} value={unit.value}>
                                {unit.label}
                            </option>
                        ))}</select>
                    <button onClick={handleClick}>Get Weather</button>
                </div>
            </div> : null}
            {results ? <div className="Layout">
                {weatherData ? (
                    <>
                        <div className="header">TODAY's FORECAST</div>
                        <div className="grid">

                            <div className="flex-column">
                                <div>{weatherData.name} , {weatherData.sys.country}</div>
                                <div>{currentDate}</div>
                            </div>
                            <div className="flex-column">
                                <div> {weatherData.main.temp} {value == "metric" ? "°C" : "°F"}</div>
                                <div>{weatherData.weather[0].description}</div>
                            </div>

                            <div className="flex-column">
                                <img src={getIcon(weatherData.weather[0].icon)}></img>
                            </div>
                        </div>
                        <div className="info-text">
                            {/* <div>{weatherData.name},</div>
                            <div>{weatherData.sys.country}</div> */}
                            AIR CONDITIONS
                        </div>
                        <div className="grid-content">
                            <div className="flex-column">
                                <label>Humidity</label>
                                <div>{weatherData.main.humidity}%</div>

                            </div>
                            <div className="flex-column">
                                <label>Feels like</label>
                                <div>{weatherData.main.feels_like}{value == "metric" ? "°C" : "°F"}</div>
                            </div>
                            <div className="flex-column">
                                <label>Pressure</label>
                                <div>{weatherData.main.pressure}</div>

                            </div>
                            <div className="flex-column">
                                <label>Wind Speed</label>
                                <div> {weatherData.wind.speed} {value == "metric" ? "meter/sec" : "miles/hr"} </div>
                            </div>
                        </div>
                    </>
                ) : (errorMsg != "" ? <div className="flex-column" >{errorMsg}</div>
                    :
                    <div className="flex-column" >Loading weather data...</div>

                )}
            </div> : null}
        </div>
    );

}

export default CityComponent;