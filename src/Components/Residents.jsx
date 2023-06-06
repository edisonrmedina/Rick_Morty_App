import React, { useState } from 'react'
import ResidentInfo from './ResidentInfo';
import Pagination from './Pagination';
import './Residents.css';

export default function Residents({residents}) {
  
  const [currentPage, setCurrentPage] = useState(1);
  const residentsPerPage = 10; // Número de residentes por página

  // Calcular el índice de inicio y fin para los residentes en la página actual
  const indexOfLastResident = currentPage * residentsPerPage;
  const indexOfFirstResident = indexOfLastResident - residentsPerPage;
  const currentResidents = residents?.slice(indexOfFirstResident, indexOfLastResident);

  //tomamos para arriba para no dejar informacion por fuera
  const totalPages = Math.ceil(residents?.length / residentsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
        <div className='container-resident'>
          <h1>Residents</h1>
          <div className="data-resident">
            {currentResidents?.map((resident, index) => (
              <ResidentInfo key={index} residentUrl={resident} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      );
}