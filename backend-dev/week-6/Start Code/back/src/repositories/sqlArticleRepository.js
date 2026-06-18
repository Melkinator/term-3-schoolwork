//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//

// Get all articles
export async function getArticles() {
    // TODO
    const [rows] = await pool.execute("SELECT * FROM articles");
    return rows;
}

// Get one article by ID
export async function getArticleById(id) {
    // TODO
    const [rows] = await pool.execute("SELECT * FROM articles WHERE id = ?", [id]);
    return rows[0] || null;
}

// Create a new article
export async function createArticle(article) {
    // TODO
    const [result] = await pool.execute("INSERT INTO articles (title, content) VALUES (?, ?)", [article.title, article.content]);
    return result;
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    const [result] = await pool.execute("UPDATE articles SET title = ?, content = ? WHERE id = ?", [updatedData.title, updatedData.content, id]);
    return result;
}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    const [result] = await pool.execute("DELETE FROM articles WHERE id = ?", [id]);
    return result;
}