#!/bin/bash

export DISPLAY=:1

mkdir -p /tmp/.X11-unix

Xvfb :1 -screen 0 1280x720x24 &

sleep 2

fluxbox &

x11vnc -display :1 -nopw -forever -shared &

websockify --web /usr/share/novnc/ 6080 localhost:5900
