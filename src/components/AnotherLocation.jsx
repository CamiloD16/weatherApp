import React, { useContext } from 'react'
import LocationContext from '../context/LocationContext'

const AnotherLocation = () => {

  const { searcher, setSearch } = useContext(LocationContext)

  const changeFavoriteCity = (city) => {
    setSearch(city)
  }

  const favoritesCities = ["Rome","Paris","Madrid","Bogotá"]

  return (
    <form className='anotherLocation' onSubmit={searcher}>
      <input type="text" name="location" id="location" placeholder='Another location'/>
      <div className="cities">
        <h4 onClick={() => changeFavoriteCity(favoritesCities[0])}>{favoritesCities[0]}</h4>
        <h4 onClick={() => changeFavoriteCity(favoritesCities[1])}>{favoritesCities[1]}</h4>
        <h4 onClick={() => changeFavoriteCity(favoritesCities[2])}>{favoritesCities[2]}</h4>
        <h4 onClick={() => changeFavoriteCity(favoritesCities[3])}>{favoritesCities[3]}</h4>
      </div>
    </form>
  )
}

export default AnotherLocation