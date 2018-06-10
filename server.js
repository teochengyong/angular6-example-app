const express = require('express');
const compression = require('compression')
const path = require('path');
const app= express()
app.use(compression());
const port = process.env.PORT || 8080;
// static file serve
const dirName = 'dist'
app.use(express.static(path.resolve(`${dirName}`)))
// not found in static files, so default to index.html
app.use((req, res) => res.sendFile(path.resolve(`${dirName}/index.html`)))
app.listen(port, (e, b) => {
    console.log(`Server has started in port ${port}`);
})