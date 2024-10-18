import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(""); 
  const navigate= useNavigate();
  console.log(name, email, age);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { name, email, age };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}`, {
      
        method: "POST",
        body: JSON.stringify(addUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result.error);
        setError(result.error);
      }

      if (response.ok) {
        console.log(result);
        setError("");
        setName("");
        setEmail("");
        setAge("");
        navigate("/all");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 className="text-center">Enter the data</h2>

      <form onSubmit={handleSubmit}> {/* Corrected this line */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Create;

