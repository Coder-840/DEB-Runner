const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('.'));

// Scans for .deb files in the folder
app.get('/list-debs', (req, res) => {
    const files = fs.readdirSync('.').filter(f => f.endsWith('.deb'));
    res.json(files);
});

// The command that installs and runs the app
app.get('/run', (req, res) => {
    const file = req.query.file;
    console.log(`Installing and launching: ${file}`);
    
    // Command: Install the deb, then launch on Display :1 (the vnc display)
    const cmd = `sudo apt-get update && sudo apt install -y ./${file} && export DISPLAY=:1 && $(dpkg -c ${file} | grep '/usr/bin/' | head -n 1 | awk '{print $NF}' | xargs basename) &`;
    
    exec(cmd, (err) => {
        if (err) console.error(err);
    });
    res.send("Launching...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
