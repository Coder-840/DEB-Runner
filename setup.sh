#!/bin/bash

# Install Node dependencies
npm init -y
npm install express

# Install libraries that 99% of .deb apps (Chrome, Discord, etc) require
sudo apt-get update
sudo apt-get install -y libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
libxkbcommon0 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libasound2 \
libpango-1.0-0 libcairo2 fonts-liberation

# Start the backend server in the background
node server.js &
