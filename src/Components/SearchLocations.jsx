import React, { useState } from 'react'
import './SearchLocation.css';

export default function SearchLocations({searchLocations}) {
    
    const [location, setLocation] = useState("");

    const handleClick = () => {
        searchLocations(location)
    }

    const changeLocation = (event) => {
        setLocation(event.target.value);
    }

    return (
        <>
        <div>
            <input 
                type="text"
                placeholder='Type location id'
                onChange={changeLocation}
            />
            <button className='button-search' onClick={handleClick}>Search</button> 
        </div>
        <p className='color-green center'>Welcome to crazy universe</p>
        </>
    )
}
