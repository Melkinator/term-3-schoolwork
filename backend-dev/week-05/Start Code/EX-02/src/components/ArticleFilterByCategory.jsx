import { useEffect, useState } from 'react';
import axios from 'axios';
import { use } from 'react';

export default function ArticleFilterByCategory() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  // Fetch all articles when component mounts
  useEffect(() => {
    fetchArticles();
    fetchCategories();
  }, []);

  const fetchArticles = async () => {
    // Fetch articles from the API
    try {
      const response = await axios.get('http://localhost:3000/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const fetchCategories = async () => {
    // Fetch categories from the API
    try {
      const response = await axios.get('http://localhost:3000/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleApplyFilters = async () => {
    try {
      if (selectedCategory) {
        const response = await axios.get(`http://localhost:3000/categories/${selectedCategory}/articles`);
        setArticles(response.data);
      } else {
        fetchArticles();
      }
    } catch (error) {
      console.error('Error applying filters:', error);
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory("");
    fetchArticles();
  }

  return (
    <div>
      <h2>Articles</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select 
          id="categoryFilter"
          value = {selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
        <option value="">All Categories</option>
          {/* Options for categories */}
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name || `Category #${category.id}`}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            // Logic to apply filters
            handleApplyFilters();
          }}
        >Apply Filters</button>
        <button
          onClick={() => {
            // Logic to reset filters
            handleResetFilters();
          }}
        >Reset Filters</button>
      </div>

      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <strong>{article.title}</strong> <br />
            <small>By Journalist #{article.journalistId} | Category #{article.categoryId}</small><br />
            <button disabled>Delete</button>
            <button disabled>Update</button>
            <button disabled>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}