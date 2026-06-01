import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css';

const faqItems = [
  {
    question: 'What is a Design Sprint?',
    answer:
      'A Design Sprint is a five-day process for answering critical business questions through design, prototyping, and testing with customers. DezyIt guides your team through each day with structured activities and timers.',
  },
  {
    question: 'Is DezyIt free to use?',
    answer:
      'Yes. You can download the beta version for free on the App Store and Google Play. Premium facilitation features may be added in future releases.',
  },
  {
    question: 'Who is DezyIt for?',
    answer:
      'Product managers, designers, founders, and cross-functional teams who want to innovate faster using design thinking—without needing an external facilitator for every session.',
  },
  {
    question: 'Do I need design experience?',
    answer:
      'No. The app explains each step, from empathy mapping and Crazy-8s to impact vs. feasibility analysis, so beginners and experts can run sprints confidently.',
  },
  {
    question: 'Can remote teams use DezyIt?',
    answer:
      'Absolutely. DezyIt is built for collaboration whether your team is in one room or distributed across time zones.',
  },
];

const FAQ = () => (
  <section className="faq" aria-labelledby="faq-heading">
    <div id="movetofaq" aria-hidden="true" />
    <div className="faq__header">
      <h2 id="faq-heading" className="faq__heading">
        Frequently asked questions
      </h2>
      <p className="faq__subheading">
        Quick answers about design sprints, the app, and getting your team started.
      </p>
    </div>
    <div className="faq__accordion-wrap">
      <Accordion defaultActiveKey="0" className="faq-accordion">
        {faqItems.map((item, index) => (
          <Accordion.Item eventKey={String(index)} key={item.question}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
