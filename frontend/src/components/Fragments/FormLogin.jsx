import React, { useState } from "react";
import Button from "../elements/button";
import axios from "axios";

const FormLogin = () => {
  const [nama, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login',
      {
        nama,
        password
      }
    );
      console.log(nama, password);
      console.log('Login successful:', response.data.payload);
      window.location.href = '/homePage';
    } catch (err) {
      setError('Login failed. Please check your username and password.');
      console.error('Error logging in:', err);
    }
  };


  return (
    <form onSubmit={handleLogin}>
   
      <div className="mb-4">
        <input
          type="text"
          name="nama"
          value={nama}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <input
        type="password"
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
