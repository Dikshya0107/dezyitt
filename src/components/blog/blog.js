import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import './blog.css';
import Cards from './Card';
import { data, ITEMS_PER_PAGE } from './CardData';

const Blog = () => {
  const [activePage, setActivePage] = useState(1);

  const indexOfLast = activePage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
  const currentPosts = data.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    document.getElementById('movetoblog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="blogsection">
      <div id="movetoblog" aria-hidden="true" />
      <h4 className="blogsection__title">OUR BLOGS</h4>
      <Cards posts={currentPosts} />
      <div className="blog-pagination">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={ITEMS_PER_PAGE}
          totalItemsCount={data.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Blog;
