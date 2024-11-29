import React, { useState } from "react";

const DynamicForm = () => {
  // State for form data and errors
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one digit.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        username: "",
        email: "",
        password: "",
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      {/* Username Field */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ display: "block", width: "100%" }}
          />
        </label>
        {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
      </div>

      {/* Email Field */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", width: "100%" }}
          />
        </label>
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      {/* Password Field */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ display: "block", width: "100%" }}
          />
        </label>
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
      </div>

      <button type="submit" style={{ padding: "10px 20px" }}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
