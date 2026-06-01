import React from 'react';
import Card from './CardUI';

const Cards = ({ posts }) => (
  <div className="row blog-cards-row">
    {posts.map((post) => (
      <div key={post.url + post.title} className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
        <Card post={post} />
      </div>
    ))}
  </div>
);

export default Cards;
