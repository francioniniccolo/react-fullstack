
const PORT = process.env.PORT || 3001;

const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../fullstack-react/frontend/build')));

app.get("/test", (req, res) => {
    res.send("Hello from server");
});

app.get("/api", (req, res) => {
    res.send("Hello from server2");
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../fullstack-react/frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});