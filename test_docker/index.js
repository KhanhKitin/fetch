const app = require('express')();
app.listen(3000, () => console.log("Server is running"))
app.get('/', (req, res) => res.send("It works !!"))