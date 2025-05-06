// src/Components/ErrorPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Errorpage.css';
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <h1>Something went wrong in the application.</h1>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default ErrorPage;
