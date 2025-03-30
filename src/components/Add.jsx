import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const API_BASE_URL = 'http://localhost:3001/api';

const Add = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    imageUrl: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await axios.post(`${API_BASE_URL}/posts`, formData);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Error creating post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="blog-app">
      <nav className="navbar">
        <div className="nav-brand">BlogApp</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/add" className="nav-link">ADD</Link>
        </div>
      </nav>

      <div className="add-container">
        <form className="add-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Add New Blog Post</h2>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="">Select category</option>
              <option value="Travel">Travel</option>
              <option value="Art">Art</option>
              <option value="Food">Food</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              required
              disabled={isSubmitting}
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
