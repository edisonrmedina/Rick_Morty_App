import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ResidentInfo.css'

export default function ResidentInfo({ residentUrl }) {
  const [residentData, setResidentData] = useState(null);

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(response => {
        setResidentData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [residentUrl]);
  
  if (!residentData) {
    return <p>Loading resident data...</p>;
  }

  const { name, image, status, origin, episode } = residentData;

  return (
    <div className='resident-info'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="resident-info-description">
      <p>
        <span>Status:</span>
        <span className={`status-circle ${status === 'Dead' ? 'dead' : ''}`}></span>
        {status}
      </p>

        <p><span>Origen:</span> {origin.name}</p>
        <p><span>Episodios:</span> {episode.length}</p>
      </div>
    </div>
  );
}