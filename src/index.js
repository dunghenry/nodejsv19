const express = require('express');
const cors = require('cors');
const port = 4000;
const app = express();
app.use(cors());
app.get('/', async (req, res) => {
    // return res.send("Hi");
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const rs = await response.json();
    return res.status(200).json(rs);
});
app.listen(port, () => console.log(`Server listen on port: http://localhost:${port}`));
