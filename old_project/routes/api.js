const route = require('express').Router();
const { sendEmail } = require("../utils/index")
route.post('/contact', (req, res) => {
    const { name, subject, email, message } = req.body
    sendEmail({ name, subject, email, message })
    .then((data)=> {
        res.json(data)
    })
    .catch((error) => {
        console.error(error)
        res.status(500).json(error)
    });
})

module.exports = route;