// server.js

const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server
const server = http.createServer((req, res) => {
    // Serve index.html or other files based on the request
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Serve index.html for root
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.pdf': 'application/pdf',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read file 
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end('500 Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Server listens on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost : ${PORT}`));
