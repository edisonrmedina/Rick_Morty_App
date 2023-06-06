import React from 'react'
import './Pagination.css'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          disabled={page === currentPage}
          className={page === currentPage ? "pagination-button active" : "pagination-button"}
        >
          {page}
        </button>
      ))}
    </div>
  );
}


