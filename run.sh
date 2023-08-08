#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments passed."
    echo "Please provide the file to serve as the only command-line argument. In our case index.js"
    read -p "press continue to exit !!"
    exit 1
fi

if [ ! -f "$1" ]; then
    echo "Error: File '$1' not found."
    read -p "press contiue to exit !!"
    exit 1
fi

npm run start-dev "$1"

read -p "Server terminated ..."