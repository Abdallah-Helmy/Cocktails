import React from 'react';
import './style.css';
import './LoadingStyle.css';

function Loading() {
  return (
    <section className="loading">
      <div className="container">
        <div className="lds-dual-ring"></div>
      </div>
    </section>
  );
}

export default Loading;
