import { createContext, useState, useEffect} from "react"
import axios from "axios";

const LocationContext = createContext()

export default LocationContext;

export const AuthProvider = ({children}) => {

  const [search, setSearch] = useState("miami")
  const [apiData, setApiData] = useState([]);

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&lang=en&appid=f62b4de10d24119e0ef2a24f0cea1158`

  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get(url)
          .then(result => {
            setApiData(result.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  },([],[search]))

  const searcher = (e) => {
    e.preventDefault()
    setSearch(e.target.location.value)
  }

  const contextData = {
    search:search,
    searcher:searcher,
    setSearch:setSearch,
    url:url,
    apiData:apiData,
  }

  return(
    <LocationContext.Provider value={contextData} >
      {children}
    </LocationContext.Provider>
  )
}