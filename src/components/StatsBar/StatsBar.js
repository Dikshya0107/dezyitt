import React from 'react';
import './StatsBar.css';

const stats = [
  { value: '10K+', label: 'Design sprints facilitated' },
  { value: '50+', label: 'Countries using DezyIt' },
  { value: '4.8', label: 'Average app store rating' },
  { value: '5 days', label: 'Sprint process, guided step by step' },
];

const StatsBar = () => (
  <section className="stats-bar" aria-label="Product statistics">
    <div className="stats-bar__inner">
      {stats.map((stat) => (
        <div key={stat.label} className="stats-bar__item">
          <span className="stats-bar__value">{stat.value}</span>
          <span className="stats-bar__label">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
