#!/bin/bash

export DISPLAY=:1

Xvfb :1 -screen 0 1280x720x24 &

fluxbox &

x11vnc -display :1 -nopw -forever &

websockify --web /usr/share/novnc/ 6080 localhost:5900
