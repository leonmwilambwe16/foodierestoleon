import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../Components/Signup.css"
import { useAuth } from "../context/AuthContext";

function Signup() {
  const{signup}= useAuth()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [role, setRole] = useState('customer');
  const navigate = useNavigate();

  const handleSignup =  async (e) => {
    e.preventDefault();
   const res = await signup({ name, email, password, role });
    if (res.success) {
      alert('Signup successful. Please login.');
      navigate('/login');
    } else {
      alert( res.message ||"failed on the signup");
    }
  };

  return (
    <div className="container-login">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
         <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="customer">User</option>
        <option value="admin">Admin</option>
      </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;