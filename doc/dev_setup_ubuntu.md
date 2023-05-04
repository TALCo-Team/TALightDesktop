# Ubuntu: Dev Setup

Dependencies:    
- NodeJS
- Yarn
- TypeScript
- Angular
- Tauri
- TALight 

### Using Install.sh

```bash
  ./install.sh
  source ~/.bashrc
```

### Manually
- General
```bash
  sudo apt update
  sudo apt install git curl
```

- Rust
```bash
  sudo apt install cargo
  sudo apt install libwebkit2gtk-4.0-dev \
      build-essential \
      curl \
      wget \
      libssl-dev \
      libgtk-3-dev \
      libayatana-appindicator3-dev \
      librsvg2-dev
```

- NodeJS
```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  source ~/.bashrc
  nvm list-remote
  nvm install --lts
```

- Yarn
```bash
  npm install -g yarn
```
  
- TypeScript
```bash
  yarn global add typescript
```

Angular
```bash
  yarn global add @angular/cli
```

TALight ( for the server ) 
```bash
  sudo apt install cargo
  source install_talight.sh
```

- Project Dependencies
```bash
  yarn install
```
