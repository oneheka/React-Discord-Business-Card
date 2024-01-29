const express = require('express')
const app = express()

app.use('/static', express.static(__dirname + '/build/static'));
app.use((_, res) => res.sendFile(`${__dirname}/build/index.html`))

app.listen(3000, () => {
    console.log(`Example app listening on port http://localhost:3000/`);
})