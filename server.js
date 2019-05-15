const express = require('express');
const app = express();
const PORT = 3000;
const handleHttpCalculation = require("./math");

app.get("/", handleHttpCalculation);
app.listen(PORT);
console.log(`Your application is running at http://localhost:${PORT}`);