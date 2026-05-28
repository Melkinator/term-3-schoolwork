import data from "../models/data.js";

const { categories } = data;

export const getAllCategories = (req, res) => {
    res.json(categories);
}

export const getCategoryById = (req, res) => {
    const {id} = req.params;
    const categoryIndex = categories.findIndex(c => c.id === parseInt(id));
    if (categoryIndex === -1) {
        return res.status(404).json({ error: "category not found" });
    }
    res.json(categories[categoryIndex]);
}

export const createCategory = (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({error: "vro please put a name"});
    }
    const newCategory = {
        id: categories.length+1,
        name: name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
}

export const updateCategory = (req, res) => {
    const {id} = req.params;
    const categoryIndex = categories.findIndex(c=>c.id===parseInt(id));
    if (categoryIndex === -1) {
        return res.status(404).json({ error: "that category doesnt exist twin" });
    }
    const {name} = req.body;
    if (name) categories[categoryIndex].name = name;
    res.json(categories[categoryIndex]);
}

export const deleteCategory = (req, res) => {
    const {id} = req.params;
    const categoryIndex = categories.findIndex(c=>c.id===parseInt(id));
    if (categoryIndex === -1) {
        return res.status(404).json({ error: "that category doesnt exist twin" });
    }
    categories.splice(categoryIndex, 1);
    res.json({ message: "category deleted" });
}

