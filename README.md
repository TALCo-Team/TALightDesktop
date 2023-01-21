# TALightDesktop

Try the [LIVE DEMO](https://talco-team.github.io/TALightDesktop/)

This app in intended to be used as Graphic client for TALight      
https://github.com/romeorizzi/TALight



## Install

TODO: Download a binary release

## Setup Development Environment 
The project by default is intended to be used with Visual Studio Code.      
The app is a client and in order to be used it requires to connect to instance of TALight server (tald).

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
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | 
sh ~/.nvm/nvm.sh install --lts
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



## Running the app

From the main folder of the app ( same location as package.json )     

Install node dependencies (run once):     
```bash
npm install
```

To run the actuall app during development ( it autoreload when files are changed )     
Then navigate to `http://localhost:4200/`
```bash
npm start 
```
internally it does "ng serve --open"

To create new components (ex: views ) 
```bash
ng generate component component-name
```

To build a "production" version, the build artifacts will be stored in the `dist/` directory.
```bash
ng build
```

__This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.__
