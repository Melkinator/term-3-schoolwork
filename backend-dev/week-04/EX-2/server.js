import express from "express";
import articles from "./models/data.js";
import articleRouter from "./routes/articleRoutes.js";
import journalistRouter from "./routes/journalistRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

const app = express();
app.use(express.json());
app.use('/articles', articleRouter);
app.use('/journalists', journalistRouter);
app.use('/categories', categoryRouter);

const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});