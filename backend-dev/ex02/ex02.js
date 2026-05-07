import http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/plain');

    switch (url) {
        case '/about':
            if (method==='GET') {
                res.end('About Us: at CADT, we love node.js!');
            }
            break;
        case '/contact-us':
            if (method==='GET') {
                res.end('You can reach us via email..');
            }
            break;
        case '/products':
            if (method==='GET') {
                res.end('Buy one get one..');
            }
            break;
        case '/projects':
            if (method==='GET') {
                res.end('Here are our awesome projects');
            }
            break;
        default:
            res.statusCode = 404;
            res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});