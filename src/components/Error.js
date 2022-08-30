import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/style.css';
import './ErrorStyle.css';

function Error() {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="container">
          <h1 className="error-msg">Page Not Found !</h1>
          <div className="back">
            <span onClick={() => navigate('Cocktails')}>Back Home</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Error;
