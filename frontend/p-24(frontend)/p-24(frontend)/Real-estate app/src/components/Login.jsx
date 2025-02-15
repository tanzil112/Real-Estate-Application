import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './login.css';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBIMI5SexFE4eajxOT-DzM1QSXdd2zS-fg",
  authDomain: "sign-in-184d9.firebaseapp.com",
  projectId: "sign-in-184d9",
  storageBucket: "sign-in-184d9.firebasestorage.app",
  messagingSenderId: "846225488576",
  appId: "1:846225488576:web:24edc7925d274ea9a4cb25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (person) => {
      setUser(person || null);
    });
    return () => unsubscribe();
  }, []);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Please enter both username and password.');
      return;
    }
    
    if (role === 'admin' && (username !== 'adminUser' || password !== 'adminPass')) {
      setMessage('Invalid admin credentials.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8083/api/auth/login', { username, password });
      setMessage(response.data);
      if (response.data === 'Login successful!') {
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'seller') {
          navigate('/seller-dashboard');
        } else {
          navigate('/user-dashboard');
        }
      }
    } catch (error) {
      setMessage(error.response ? error.response.data : 'An error occurred, please try again.');
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/dashboard2');
    } catch (err) {
      console.log(err);
    }
  };

  const handleResetPassword = async () => {
    if (!resetEmail) {
      setResetMessage('Please enter your email.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetMessage('Password reset email sent! Check your inbox.');
    } catch (error) {
      setResetMessage(error.message || 'Failed to send reset email.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="background-video-wrapper">
        <video autoPlay loop muted className="background-video">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Username:</label>
              <input type="text" placeholder="Enter your username" className="login-input" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <div className="password-container">
                <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? '👁️' : '🔒'}
                </span>
              </div>
            </div>
            <div className="input-group">
              <label>Select Role:</label>
              <select className="role-dropdown" value={role} onChange={handleRoleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <p>Don't have an account? <Link to="/register" style={{color:'#E0C097'}}>Signup</Link></p>
          <center>
            {user ? (
              <button onClick={() => signOut(auth)}>Sign Out</button>
            ) : (
              <button onClick={signInWithGoogle}>
                <FontAwesomeIcon icon={faGoogle} style={{ marginRight: "8px" }} /> Sign In With Google
              </button>
            )}
          </center>
          {message && <p>{message}</p>}
          <p>Forgot password? <span style={{ color: 'blue', cursor: 'pointer' , color:'#E0C097' }} onClick={() => setResetMessage('')}>Reset here</span></p>
          <div>
            <input type="email" placeholder="Enter your email" className="login-input" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} />
            <button onClick={handleResetPassword} className="reset-button">Reset Password</button>
          </div>
          {resetMessage && <p>{resetMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
