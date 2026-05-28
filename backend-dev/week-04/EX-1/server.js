import express from "express";
import logger from "./logger.js";

const app = express();
app.use(express.json());
app.use(logger);

// In-memory user store
let users = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Lee", email: "charlie.lee@example.com" },
  { id: 4, name: "Diana Prince", email: "diana.prince@example.com" },
  { id: 5, name: "Ethan Brown", email: "ethan.brown@example.com" },
  { id: 6, name: "Fiona Garcia", email: "fiona.garcia@example.com" },
  { id: 7, name: "George King", email: "george.king@example.com" },
  { id: 8, name: "Hannah White", email: "hannah.white@example.com" },
  { id: 9, name: "Ian Black", email: "ian.black@example.com" },
  { id: 10, name: "Jane Miller", email: "jane.miller@example.com" },
  { id: 11, name: "Kyle Green", email: "kyle.green@example.com" },
  { id: 12, name: "Laura Adams", email: "laura.adams@example.com" },
  { id: 13, name: "Mike Davis", email: "mike.davis@example.com" },
  { id: 14, name: "Nina Torres", email: "nina.torres@example.com" },
  { id: 15, name: "Oscar Young", email: "oscar.young@example.com" },
  { id: 16, name: "Paula Scott", email: "paula.scott@example.com" },
  { id: 17, name: "Quentin Wright", email: "quentin.wright@example.com" },
  { id: 18, name: "Rachel Hall", email: "rachel.hall@example.com" },
  { id: 19, name: "Steve Baker", email: "steve.baker@example.com" },
  { id: 20, name: "Tina Morgan", email: "tina.morgan@example.com" },
];

app.get('/users', (req, res)=> {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u=>u.id===id);
  if (user) {
    res.end(JSON.stringify(user));
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

app.post('/users', (req, res) => {
  const {name, email} = req.body;
  if (!name||!email) {
    return res.status(400).json({error: "Name and email required."});
  }
  const newUser = {
    id: users.length+1,
    name: name,
    email: email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u=>u.id===id);
  if (user) {
    const {name, email} = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
  } else {
    return res.status(404),json({ error: "User no foundie."});
  }
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u=>u.id===id);
  if (index!==-1) {
    users.splice(index, 1);
    return res.status(204).end();
  } else {
    return res.status(404).json({ error: "User not found twin"});
  }
})

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
