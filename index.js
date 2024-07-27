const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(4040, console.log('Server has been started'));
