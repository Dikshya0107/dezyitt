import React from 'react';

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="blog-pagination" aria-label="Blog pages">
      <button
        type="button"
        className="blog-pagination__arrow"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Go to previous page"
      >
        ‹
      </button>

      <ul className="blog-pagination__pages">
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={`blog-pagination__page${
                page === currentPage ? ' blog-pagination__page--active' : ''
              }`}
              onClick={() => onPageChange(page)}
              aria-label={`Go to page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="blog-pagination__arrow"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Go to next page"
      >
        ›
      </button>

      <span className="blog-pagination__meta">
        Page {currentPage} of {totalPages}
      </span>
    </nav>
  );
};

export default BlogPagination;
