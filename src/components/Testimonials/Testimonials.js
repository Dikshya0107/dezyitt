import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote:
      'DezyIt turned our chaotic brainstorms into a structured sprint. Our whole team finally speaks the same design-thinking language.',
    name: 'Priya Sharma',
    role: 'Product Manager, FinTech startup',
    rating: 5,
  },
  {
    quote:
      'The Crazy-8 and feasibility exercises alone saved us weeks. We validated ideas with users before writing a single line of code.',
    name: 'James Okonkwo',
    role: 'UX Lead, HealthTech',
    rating: 5,
  },
  {
    quote:
      'As a facilitator, I love having prompts and timers in one place. It feels like having a design sprint coach in my pocket.',
    name: 'Elena Vasquez',
    role: 'Design Consultant',
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="testimonials" aria-labelledby="testimonials-heading">
    <h2 id="testimonials-heading" className="testimonials__heading">
      What teams are saying
    </h2>
    <div className="testimonials__grid">
      {testimonials.map((item) => (
        <article key={item.name} className="testimonials__card">
          <div className="testimonials__stars" aria-label={`${item.rating} out of 5 stars`}>
            {'★'.repeat(item.rating)}
          </div>
          <blockquote className="testimonials__quote">&ldquo;{item.quote}&rdquo;</blockquote>
          <footer className="testimonials__author">
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </footer>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;
