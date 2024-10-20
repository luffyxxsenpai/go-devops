import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Add useNavigate for redirecting after update

const Update = () => {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate(); // Use for redirecting after update
  
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [age, setAge] = useState([]);
  const [error, setError] = useState();
  
  // Fetch user details to fill the form for editing
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:7000/${id}`);
      const data = await response.json();
      if (response.ok) {
        setName(data.name);
        setEmail(data.email);
        setAge(data.age);
      } else {
        setError("Unable to fetch user data");
      }
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedUser = { name, email, age };

    // Make the PATCH request to update the user
    const response = await fetch(`http://localhost:7000/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    } else {
      setError("");
      navigate("/all"); // Redirect to all posts after successful update
    }
  };

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 className="text-center">Edit User</h2>

      <form onSubmit={handleUpdate}> {/* Attach the handleUpdate function to the form */}
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

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Update;
