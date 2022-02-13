const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Bot is  is Alive!'));

app.listen(port, () => console.log(`MultiCord is listening to http://localhost:${port}`));
