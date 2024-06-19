import React, { useState } from 'react';
import Button from "../elements/button";
import Input from "../elements/input";
import axios from 'axios';

const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const token = localStorage.getItem('authToken');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password
      });
      const { token } = response.data.payload;
      localStorage.setItem('authToken', token);
      window.location.href = '/homePage';
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Error logging in:', err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="mr-2"
          />
          <label htmlFor="remember">Ingat saya</label>
        </div>
        <a href="#">Lupa sandi?</a>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <Button type="submit" classname="bg-black text-white w-full">
        Masuk
      </Button>
      
    </form>
  );
};

export default FormLogin;
