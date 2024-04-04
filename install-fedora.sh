#! /bin/bash
sudo dnf update


sudo dnf -y install git curl cmake curl wget
# Rust
sudo dnf -y install cargo
sudo dnf -y install pkg-config
sudo dnf -y group install "C Development Tools and Libraries" "Development Tools"
sudo dnf -y install webkit2gtk4.0-devel \
    openssl-devel \
    gtk3-devel \
    libindicator \
    librsvg2-devel

# NodeJS
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
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


