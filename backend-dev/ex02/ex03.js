import http from 'http';
import fs from 'fs';
import querystring from 'querystring';

const server = http.createServer((req, res) => {
    if (req.url === '/contact' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<form method="POST"><input name="username"><button>Submit</button></form>');
    } else if (req.url === '/contact' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedData = querystring.parse(body);
            const name = parsedData.username || 'Unknown';

            fs.appendFile('submissions.txt', `${name}\n`, (err) => {
                if (err) {
                    res.statusCode = 500;
                    return res.end('Error saving data');
                }
                res.setHeader('Content-Type', 'text/html');
                res.end(`<h1>Success!</h1><p>Thank you ${name}!</p>`);
            });
        });
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});