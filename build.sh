#!/bin/bash

# Function to check if a command exists
command_to_exec() {
  command -v "$1" >/dev/null 2>&1
}

# Check if npm is installed
if command_to_exec npm; then
  echo "npm is installed."
else
  echo "npm is not installed. Please install npm from https://nodejs.org/"
  read -p "Press enter to continue"
  exit 1
fi

# Check if node is installed
if command_to_exec node; then
  echo "node is installed."
else
  echo "node is not installed. Please install Node.js from https://nodejs.org/"
  read -p "Press enter to continue"
  exit 1
fi

echo "removing old node modules .."
rm -rf node_modules/
if [ $? -eq 0 ]; then
    echo "node modules deleted successfully"
else
    echo "unable to delete node modules"
    read -p "please delete them manually"
fi
echo "Starting to install node packages..."
npm install

if [ $? -eq 0 ]; then
    echo "npm install successful."
    read -p "node modules installed successfully. Press enter to continue !! and to run the programme ./run.sh"
else
    echo "npm install failed. Please check the error messages above."
    read -p "node modules failed to install. Please recompile"
fi
