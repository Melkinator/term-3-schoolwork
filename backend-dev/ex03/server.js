// server.js
import express from 'express';
import courses from "./course.js";

import logger from './logger.js';
import validateQuery from './validateQuery.js';


const app = express();
const PORT = 3000;

app.use(logger);

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', validateQuery, (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    let filtered = courses.filter(course => {
        return course.department.toLowerCase()===dept.toLowerCase();
    });

    if (level) {
        filtered = filtered.filter(course => {
            return course.level.toLowerCase()===level.toLowerCase();
        });
    }
    if (minCredits) {
        filtered = filtered.filter(course => {
            return course.credits >= parseInt(minCredits);
        });
    }
    if (maxCredits) {
        filtered = filtered.filter(course => {
            return course.credits <= parseInt(maxCredits);
        });
    }
    if (semester) {
        filtered = filtered.filter(course => {
            return course.semester.toLowerCase()===semester.toLowerCase();
        });
    }
    if (instructor) {
        filtered = filtered.filter(course => {
            return course.instructor.toLowerCase().includes(instructor.toLowerCase());
        });
    }

    res.json({
        results: filtered,
        meta: {
            total: filtered.length
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
