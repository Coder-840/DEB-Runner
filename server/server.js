const express = require("express")
const multer = require("multer")
const { exec } = require("child_process")
const path = require("path")

const app = express()
const upload = multer({ dest: "uploads/" })

app.use(express.static("public"))

app.post("/upload", upload.single("deb"), (req, res) => {

    const debPath = req.file.path

    exec(`sudo dpkg -i ${debPath} || sudo apt-get install -f -y`, (err, stdout, stderr) => {

        if (err) {
            return res.send(stderr)
        }

        res.send("Installed successfully")
    })
})

app.post("/run", express.json(), (req, res) => {

    const cmd = req.body.command

    exec(`DISPLAY=:1 ${cmd}`, (err, stdout, stderr) => {})

    res.send("Launched")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
