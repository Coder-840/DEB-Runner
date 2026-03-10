#!/bin/bash

export DISPLAY=:1

mkdir -p /tmp/.X11-unix

Xvfb :1 -screen 0 1280x720x24 &
sleep 2

fluxbox &
sleep 1

x11vnc -create -forever -shared -nopw -display :1 &
sleep 1

websockify --web /usr/share/novnc/ 6080 localhost:5900
