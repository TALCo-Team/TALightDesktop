#! /bin/bash
# EXPERIMENTAL
sudo apt install git curl

# NodeJS
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
# nvm list-remote
nvm install --lts
source ~/.bashrc

# TypeScript
npm install -g typescript


# Angular
npm install -g @angular/cli

# Project dependencies
npm install 

# TALight ( for the server ) 
./install_talight.sh
source ~/.bashrc


