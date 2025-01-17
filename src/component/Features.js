import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features" id="features">
      <h2>Analytics that feels like it’s from the future</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Feature 1</h3>
          <p>Description of feature 1.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 2</h3>
          <p>Description of feature 2.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 3</h3>
          <p>Description of feature 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
