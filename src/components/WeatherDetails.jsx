import React, { useContext } from 'react'
import LocationContext from '../context/LocationContext'

const WeatherDetails = () => {

  const { apiData } = useContext(LocationContext)

  return (
    (apiData !=0 ?
    <div className='weatherDetails'>
      <h3>Weather Details</h3>
      <div className="detail">
        <h4>Cloudy</h4>
        <h4>{apiData.clouds.all}%</h4>
      </div>
      <div className="detail">
        <h4>Humidity</h4>
        <h4>{apiData.main.humidity}%</h4>
      </div>
      <div className="detail">
        <h4>Wind</h4>
        <h4>{apiData.wind.speed}km/h</h4>
      </div>
      <div className="detail">
        <h4>pressure</h4>
        <h4>{apiData.main.pressure}hPa</h4>
      </div>
    </div>
    : null)
  )
}

export default WeatherDetails