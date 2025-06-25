import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length < 6) {
      setError('Username must be at least 6 characters.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    const result = await signup(username, password);
    if (!result.success) {
      setError(result.message);
    }
  };

  const styles = {
    wrapper: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
      fontFamily: "'Poppins', sans-serif",
    },
    card: {
      background: 'rgba(255, 255, 255, 0.25)',
      backdropFilter: 'blur(15px)',
      borderRadius: '20px',
      padding: '40px 30px',
      width: '350px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      textAlign: 'center',
    },
    logo: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      marginBottom: '10px',
      border: '2px solid #fff',
    },
    heading: {
      fontSize: '22px',
      fontWeight: '600',
      margin: '10px 0 20px',
      color: '#222260',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '10px',
      border: '1px solid #ccc',
      fontSize: '15px',
      outline: 'none',
      transition: '0.2s',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#222260',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      marginTop: '15px',
      transition: 'all 0.3s ease',
    },
    error: {
      color: '#e63946',
      marginTop: '10px',
      fontSize: '14px',
    },
    link: {
      display: 'block',
      marginTop: '20px',
      color: '#222260',
      fontSize: '14px',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.wrapper}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <img src={logo} alt="KharchaGuru" style={styles.logo} />
        <div style={styles.heading}>Create Account</div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#3f3f8c')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#222260')}
        >
          Signup
        </button>
        {error && <div style={styles.error}>{error}</div>}
        <Link to="/login" style={styles.link}>
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
