import React, { useState } from 'react'
import './Location.css'

export default function Location({location}) {
  
    return (
          <div className='container-location'>
            <h2>{location.name}</h2>
            <div className='container-location-info'>
              <span>type: </span>{location.type}
              <span>dimension: </span>{location.dimension}
              <span>population: </span>{location.residents?.length}
            </div>
          </div>
      );
  
}