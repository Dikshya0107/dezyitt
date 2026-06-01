import React from 'react';
import './why_us.css';

const features = [
  {
    title: 'Collaboration',
    image:
      'https://static.wixstatic.com/media/ec9816_d3949d97e43843b8a292ffe04eacce85~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp',
    imageAlt: 'Team collaboration in design sprint',
    text:
      "The product development journey can become a linear process where there is very minimal interaction between the product team and all the other stakeholders, including the marketers, the sales team and customer service. Dezy It, brings in a collaborative space for your team to leverage design thinking and work together and participate in the ideation process, sharing valuable insights which would shape the product and its features. It's a process which truly gets your whole team invested!",
    reverse: false,
  },
  {
    title: 'Creativity',
    image:
      'https://static.wixstatic.com/media/ec9816_02665f5bd8044684b66a011b3c3bd8ca~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp',
    imageAlt: 'Creative design sprint ideation',
    text:
      'Design Sprints are a great way to quickly innovate. A structured agile process to streamline your innovation and come up with multiple creative ideas using the Crazy-8 framework. It boosts your morale and provokes you to think out of the box. Now, with a ton of ideas, the Impact vs Feasibility analysis is a simple yet effective criteria, to shortlist the winning ides and most importantly validate them with real users.',
    reverse: true,
  },
  {
    title: 'Empathy',
    image:
      'https://static.wixstatic.com/media/ec9816_2f2c8bead30544a89198bb3d605d232a~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp',
    imageAlt: 'Empathy mapping in design thinking',
    text:
      'The first rule of design thinking is to keep your users in the centre and under a spotlight. All great ideas arrive from devastating problems. The design sprint focuses on getting each and every team member to be able to empathise and understand the user, map their journeys and identify their pain points. You have to truly step into the shoes of your users to understand their psychology and experience of what they feel and think; while using your product or service.',
    reverse: false,
  },
];

const WhyUs = () => (
  <section className="sec4">
    <div id="movetowhy_us" aria-hidden="true" />
    <div className="div_1">
      <div className="why_us">
        <h2>Why Dezy IT?</h2>
      </div>

      {features.map((feature) => (
        <div
          key={feature.title}
          className={`div_2${feature.reverse ? ' div_2--reverse' : ''}`}
        >
          <div className="div_3">
            <h3 className="font_2">{feature.title}</h3>
            <hr className="why-us__rule" />
            <p className="p_text">{feature.text}</p>
          </div>
          <div className="why-us__media">
            <img src={feature.image} alt={feature.imageAlt} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyUs;
