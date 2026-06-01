import React from 'react';
import './CardUI.css';

const Card = ({ post }) => {
  if (!post) return null;

  return (
    <div className="card text-center blog-card">
      <div className="overflow">
        <img src={post.img} alt={post.title} className="card-img-top" loading="lazy" />
      </div>
      <div className="card-body text-dark">
        <div className="blog-card__meta">
          <ul>
            <li>{post.time}</li>
            <li>{post.min} read</li>
          </ul>
        </div>
        <h4 className="card-title">{post.title}</h4>
        <a
          className="card-text text-secondary blog-card__link"
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {post.text}
        </a>
      </div>
    </div>
  );
};

export default Card;
