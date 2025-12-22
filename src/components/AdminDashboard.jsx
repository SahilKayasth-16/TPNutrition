import React, { useState, useEffect } from "react";
import "../styles/AdminDashboard.css"

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        name: "",
        age: "",
        goal: "",
        description: "",
        imageBefore: null,
        imageAfter: null
    });

    //Fetch information from backend
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/testimonial`)
        .then((res) => res.json())
        .then((result) => setData(result))
        .catch((err) => console.error("Error in fetching data: ", err));
    }, []);

    //for handling input change
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    //for handling filelinputs
    const handleFileChange = (e) => {
        setForm({...form, [e.target.name]: e.target.files[0] });
    };

    //for submitting new testimonial
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("age", form.age);
        formData.append("goal", form.goal);
        formData.append("description", form.description);
        formData.append("imageBefore", form.imageBefore);
        formData.append("imageAfter", form.imageAfter);

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/testimonial`, {
                method: "POST",
                body: formData
            });

            const result = await res.json();
            alert(result.message);
            window.location.reload();
        } catch(err) {
            console.error("Error in ading testimonials:", err);
            alert("Error in adding testimonnial.");
        }
    };

    //for deleting testimonial
    const handleDelete = async(id) => {
        if (!window.confirm("Are you sure want to delete this ?")) {
            return;
        }

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/testimonial/${id}`, {
                method: "DELETE",
            });
            const result = await res.json();
            alert(result.message);
            setData((prevData) => prevData.filter((item) => item._id !== id));
        } catch(err) {
            console.error("Error deleting testimonial:", err);
            alert("Error deleting testimonial.");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      {/* Add New Transformation Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "40px", margin: 'auto' }}>
        <h3>Add New Transformation</h3>
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Short description"
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <label>Before Image:</label>
        <input type="file" name="imageBefore" onChange={handleFileChange} required />
        <label>After Image:</label>
        <input type="file" name="imageAfter" onChange={handleFileChange} required />
        <br />
        <button type="submit">Add Transformation</button>
      </form>

      {/* Display Transformations */}
      <h3>Existing Transformations</h3>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead style={{ background: "#0c5b1a", color: "white" }}>
          <tr>
            <th>Before Image</th>
            <th>After Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Goal</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={`${process.env.REACT_APP_API_URL}${item.imageBefore}`}
                    alt="before"
                    height="100"
                    width="100"
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </td>
                <td>
                  <img
                    src={`${process.env.REACT_APP_API_URL}${item.imageAfter}`}
                    alt="after"
                    height="100"
                    width="100"
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.goal}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    style={{ background: "red", color: "white", border: "none", padding: "5px 10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    );
};

export default AdminDashboard;