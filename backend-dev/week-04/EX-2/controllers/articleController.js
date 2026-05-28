import data from "../models/data.js";

const { articles } = data;

export const getAllArticles = (req, res) => {
    res.json(articles);
}

export const getArticleById = (req, res) => {
    const {id} = req.params;
    const articleIndex = articles.findIndex(a => a.id === parseInt(id));
    if (articleIndex === -1) {
        return res.status(404).json({ error: "article not found" });
    }
    res.json(articles[articleIndex]);
}

export const createArticle = (req, res) => {
    const {title, content} = req.body;
    if (!title||!content) {
        return res.status(400).json({error: "vro please put a title and content"});
    }
    const newArticle = {
        id: articles.length+1,
        title: title,
        content: content
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
}

export const updateArticle = (req, res) => {
    const {id} = req.params;
    const articleIndex = articles.findIndex(a=>a.id===parseInt(id));
    if (articleIndex === -1) {
        return res.status(404).json({ error: "that article doesnt exist twin" });
    }
    const {title,content} = req.body;
    if (title) articles[articleIndex].title = title;
    if (content) articles[articleIndex].content = content;
    res.json(articles[articleIndex]);
}

export const deleteArticle = (req, res) => {
    const {id} = req.params;
    const articleIndex = articles.findIndex(a=>a.id===parseInt(id));
    if (articleIndex === -1) {
        return res.status(404).json({ error: "that article doesnt exist twin" });
    }
    articles.splice(articleIndex, 1);
    res.json({ message: "article deleted" });
}

