import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import necessary hooks

const ArticleDetail = () => {
  const { id } = useParams(); // Get the article id from the URL
  const [article, setArticle] = useState(null);

  // Fetch the article data from localStorage or your database
  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("articles"));
    if (storedArticles) {
      const foundArticle = storedArticles.find((article) => article.id === parseInt(id));
      setArticle(foundArticle);
    }
  }, [id]); // Re-run this effect when the `id` changes

  if (!article) {
    return <p>Loading article...</p>; // Show loading message until the article is found
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Posted by <span className="font-medium">{article.author}</span> on {article.date}
      </p>
      <div className="text-gray-700 mb-4">
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;