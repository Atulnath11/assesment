import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Travel',
      title: 'Travel the world!!!!!',
      imageUrl: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      category: 'Art',
      title: 'Art!!!!!!!!!!!!!',
      imageUrl: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      category: 'Food',
      title: 'Food is Art!!!!',
      imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="blog-app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">BlogApp</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/add" className="nav-link">ADD</Link>
        </div>
      </nav>

      {/* Blog Posts Grid */}
      <div className="blog-posts-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.imageUrl} alt={post.title} />
            </div>
            <div className="blog-content">
              <div className="category">{post.category}</div>
              <h3 className="title">{post.title}</h3>
              <div className="actions">
                <button className="delete-btn">DELETE</button>
                <button className="update-btn">UPDATE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
