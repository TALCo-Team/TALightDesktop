#! /bin/bash
sudo apt update


sudo apt install git curl
# Rust
sudo apt install cargo
sudo apt install pkg-config
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev

# NodeJS
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
export NVM_DIR="$HOME/.nvm"
sh $NVM_DIR/nvm.sh install --lts

# Yarn
npm install -g yarn

# TypeScript
yarn global add typescript

# Angular
yarn global add @angular/cli

# Project dependencies
yarn install

# TALight ( for the server ) 
./install-talight.sh


