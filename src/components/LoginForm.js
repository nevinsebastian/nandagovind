import React, { useState } from 'react';

const LoginForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Form Data:', formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.title}>Sign In</h2>
        
        {/* Form with onSubmit handler */}
        <form onSubmit={handleSubmit}>
          {/* Phone Number Input */}
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            style={styles.input}
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            style={styles.input}
          />

          {/* Forgot Password Link */}
          <div style={styles.forgotPasswordContainer}>
            <a href="#" style={styles.forgotPasswordLink}>
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button type="submit" style={styles.button}>Sign In</button>
        </form>

        {/* Sign Up Text */}
        <p style={styles.signupText}>
          No account? <a href="#" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#283897',
  },
  formBox: {
    width: '450px',
    padding: '50px',
    borderRadius: '45px',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '30px',
    fontSize: '28px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '15px',
    margin: '15px 0',
    borderRadius: '10px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '16px',
  },
  forgotPasswordContainer: {
    textAlign: 'right',
    marginBottom: '20px',
  },
  forgotPasswordLink: {
    color: '#bb7fa5',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#283897',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
  signupText: {
    marginTop: '25px',
    fontSize: '16px',
    color: '#555',
  },
  link: {
    color: '#bb7fa5',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default LoginForm;
