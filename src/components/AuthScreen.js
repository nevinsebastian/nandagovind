import React from 'react';
import './AuthScreen.css'; // Make sure to create this CSS file
import LoginForm from './LoginForm'; // Importing the LoginForm component

const AuthScreen = () => {
  return (
    <div className="auth-container">
      <img src="/bg.svg" alt="Background" className="background-image" />

      {/* Top-right logo */}
      <img src="/sign-in-logo.svg" alt="Logo" className="top-right-logo" />

      {/* Left side text and image */}
      <div className="left-section">
        <h1 className="explore-text">
          Hop in to explore the most intelligent integrated CRM
        </h1>
        <img src="/sign-in-image.svg" alt="Sign In" className="sign-in-image" />
      </div>

      {/* Login Form on the right */}
      <div className="right-section">
        <LoginForm />
      </div>
    </div>
  );
};

export default AuthScreen;
