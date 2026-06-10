import { useEffect, useState } from "react";
import axios from 'axios';

export default function ArticleFilter() {
  const [articles, setArticles] = useState([]);
  const [journalists, setJournalists] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedJournalist, setSelectedJournalist] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // Fetch all articles when component mounts
  useEffect(() => {
    fetchArticles();
    fetchJournalists();
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

  const fetchJournalists = async () => {
    // Fetch journalists from the API
    try {
      const response = await axios.get('http://localhost:3000/journalists');
      setJournalists(response.data);
    } catch (error) {
      console.error('Error fetching journalists:', error);
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
      if (selectedJournalist && selectedCategory) {
        const response = await axios.get(`http://localhost:3000/articles?journalistId=${selectedJournalist}&categoryId=${selectedCategory}`);
        setArticles(response.data);
      } else if (selectedJournalist) {
        const response = await axios.get(`http://localhost:3000/articles?journalistId=${selectedJournalist}`);
        setArticles(response.data);
      } else if (selectedCategory) {
        const response = await axios.get(`http://localhost:3000/articles?categoryId=${selectedCategory}`);
        setArticles(response.data);
      } else {
        fetchArticles();
      }
    } catch (error) {
      console.error('Error applying filters:', error);
    }
  };

  const handleResetFilters = () => {
    setSelectedJournalist("");
    setSelectedCategory("");
    fetchArticles();
  }

  return (
    <div>
      <h2>Articles</h2>
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <label htmlFor="journalistFilter">Filter by Journalist:</label>
        <select 
          id="journalistFilter"
          value={selectedJournalist}
          onChange={(e) => setSelectedJournalist(e.target.value)}
        >
          <option value="">All Journalists</option>
          {/* Options for journalists */}
          {journalists.map((journalist) => (
            <option key={journalist.id} value={journalist.id}>
              {journalist.name || `Journalist #${journalist.id}`}
            </option>
          ))}
        </select>

        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select 
          id="categoryFilter"
          value={selectedCategory}
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
          onClick={handleApplyFilters}
        >
          Apply Filters
        </button>
        <button
          onClick={handleResetFilters}
        >
          Reset Filters
        </button>
      </div>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <strong>{article.title}</strong> <br />
            <small>
              By Journalist #{article.journalistId} | Category #
              {article.categoryId}
            </small>
            <br />
            <button disabled>Delete</button>
            <button disabled>Update</button>
            <button disabled>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
