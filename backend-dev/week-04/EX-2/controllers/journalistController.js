import data from "../models/data.js";

const { journalists } = data;

export const getAllJournalists = (req, res) => {
    res.json(journalists);
}

export const getJournalistById = (req, res) => {
    const {id} = req.params;
    const journalistIndex = journalists.findIndex(j => j.id === parseInt(id));
    if (journalistIndex === -1) {
        return res.status(404).json({ error: "journalist not found" });
    }
    res.json(journalists[journalistIndex]);
}

export const createJournalist = (req, res) => {
    const {name, email} = req.body;
    if (!name||!email) {
        return res.status(400).json({error: "vro please put a name and email"});
    }
    const newJournalist = {
        id: journalists.length+1,
        name: name,
        email: email
    };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
}

export const updateJournalist = (req, res) => {
    const {id} = req.params;
    const journalistIndex = journalists.findIndex(j=>j.id===parseInt(id));
    if (journalistIndex === -1) {
        return res.status(404).json({ error: "that journalist doesnt exist twin" });
    }
    const {name,email} = req.body;
    if (name) journalists[journalistIndex].name = name;
    if (email) journalists[journalistIndex].email = email;
    res.json(journalists[journalistIndex]);
}

export const deleteJournalist = (req, res) => {
    const {id} = req.params;
    const journalistIndex = journalists.findIndex(j=>j.id===parseInt(id));
    if (journalistIndex === -1) {
        return res.status(404).json({ error: "that journalist doesnt exist twin" });
    }
    journalists.splice(journalistIndex, 1);
    res.json({ message: "journalist deleted" });
}

