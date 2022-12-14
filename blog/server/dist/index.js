import express from 'express';
const PORT = 5000;
const app = express();
app.get('/', (req, res) => {
    res.send("hello");
});
app.get('/bonjour', (req, res) => {
    res.send("Bonjour my french");
});
app.listen(PORT, () => {
    console.log(`server is listening port ${PORT}`);
});
//# sourceMappingURL=index.js.map