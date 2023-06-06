import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchLocations from './Components/SearchLocations'
import Location from './Components/Location'
import Residentes from './Components/Residents'
import { URLBASE, URLLOCATION } from './config.json'
import axios from 'axios'

function App() {
  const [location, setLocation] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [residents, setResidents] = useState(null);

  useEffect(() => {
    if (location !== null) {
      axios
        .get(`${URLBASE}${URLLOCATION}${location}`)
        .then(response => {
          setLocationData(response.data)
          setResidents(response.data.residents)
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [location])

  useEffect(() => {
    setLocation(Math.floor(Math.random() * (126 - 1 + 1)) + 1);
  }, [])

  const searchLocationClickHandle = (location) => {
    axios.get(`${URLBASE}${URLLOCATION}${location}`)
      .then(response => {
        setLocationData(response.data);
        setResidents(response.data.residents)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="main-container">
        <div className='container-image'>
          <div id="svg1">
        </div>
      </div>

        <div className='container-content'>
          <SearchLocations searchLocations={searchLocationClickHandle} />
          {locationData !== null && <Location location={locationData} />}
          {residents !== null && <Residentes residents={residents} />}
        </div>
      </div>
    </>
  )
}

export default App
