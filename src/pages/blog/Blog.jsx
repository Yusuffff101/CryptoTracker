import React from "react";
import "./Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Cryptocurrency: Trends to Watch in 2025",
      date: "March 26, 2025",
      content:
        "Cryptocurrency is evolving rapidly, and 2025 is expected to bring major advancements in blockchain technology...",
      link: "https://www.coindesk.com", // External link
    },
    {
      title: "Is Crypto a Safe Investment in 2025?",
      date: "March 24, 2025",
      content:
        "Cryptocurrency investments have always been volatile, but with more regulations and institutional backing, is it now a safer bet?...",
      link: "https://www.investopedia.com", // External link
    },
    {
      title: "How to Get Started with Crypto Trading as a Beginner",
      date: "March 22, 2025",
      content:
        "New to crypto trading? Here’s a simple guide to help you get started: Choose a trusted exchange, secure your assets...",
      link: "https://www.binance.com", // External link
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Latest Blog Posts</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p className="blog-date">{post.date}</p>
          <p className="blog-content">{post.content}</p>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <button className="read-more">Read More</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blog;
