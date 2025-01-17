import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What is this platform?</h3>
        <p>It is a platform that provides analytics for your business.</p>
      </div>
      <div className="faq-item">
        <h3>How can I get started?</h3>
        <p>Simply sign up and explore the features!</p>
      </div>
    </section>
  );
}

export default FAQ;
