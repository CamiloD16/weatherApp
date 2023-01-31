import React, { useContext } from 'react'
import LocationContext from '../context/LocationContext'


const CityInformation = () => {

  const { apiData } = useContext(LocationContext)

  return (
    <div className='cityInformation'>
      {apiData != 0 ? (
        <div className="cityWeather">
          <h1>{Math.trunc(apiData.main.feels_like - 273.15)}°C</h1>
          <div className='cityNameAndDate'>
            <h2>{apiData.name}</h2>
            <h3>{Date().slice(0,15)}</h3>
          </div>
          <div className='cityIconAndDescription'>
            <img src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}.png`} alt="" />
            <p>{apiData.weather[0].main}</p>
          </div>
        </div>
      ) : null }
    </div>

  )
}

export default CityInformation