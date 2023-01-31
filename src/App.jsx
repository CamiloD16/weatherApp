import './styles/App.css'
import AnotherLocation from './components/AnotherLocation'
import CityInformation from './components/CityInformation'
import WeatherDetails from './components/WeatherDetails'

import { AuthProvider } from './context/LocationContext'

function App() {
  return (
    <div className="App weatherApp">
      <AuthProvider>
        <CityInformation/>
        <div className='anotherLocationAndDetails'>
          <AnotherLocation/>
          <WeatherDetails/>
        </div>
      </AuthProvider>
    </div>
  )
}

export default App
