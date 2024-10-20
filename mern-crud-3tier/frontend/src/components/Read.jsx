import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:7000/${id}`, {
      method: "DELETE",
    });
    const result1 = await response.json();
    if (!response.ok) {
      setError(result1.error);
    }
    if (response.ok) {
      console.log("deleted", response.ok);
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
        getData(); // Fetch updated data after deletion
      }, 1000);
    }
  }

  async function getData() {
    const response = await fetch(`http://localhost:7000/`);
    const result = await response.json();
    console.log("result..", result);
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
      setError("");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger"> {error} </div>}
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.age}</p>
                
                {/* Make Edit a clickable Link */}
                  <Link 
                    to={`/edit/${ele._id}`} 
                    style={{ textDecoration: "none", cursor: "pointer", color: "blue", marginRight: "10px" }}  // Added margin-right for spacing
                  >
                    Edit
                  </Link>
                  <span
                    className="card-link"
                    onClick={() => handleDelete(ele._id)}
                    style={{ cursor: "pointer", color: "red" }}
                    >
                      Delete
                  </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
