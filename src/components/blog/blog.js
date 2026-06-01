import React, { useState } from 'react';
import './blog.css';
import Cards from './Card';
import BlogPagination from './BlogPagination';
import { data, ITEMS_PER_PAGE } from './CardData';

const Blog = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const indexOfLast = activePage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
  const currentPosts = data.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    document.getElementById('movetoblog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="blogsection">
      <div id="movetoblog" aria-hidden="true" />
      <h2 className="blogsection__title">OUR BLOGS</h2>
      <Cards posts={currentPosts} />
      <BlogPagination
        currentPage={activePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Blog;
