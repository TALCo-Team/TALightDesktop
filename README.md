# TALightDesktop

This app in intended to be used as Graphic client for TALight      
https://github.com/romeorizzi/TALight



## Install

TODO: Download a binary release

## Setup Development Environment 
The project by default is intended to be used with Visual Studio Code.
The app is a client and in order to be used it requires to connect to instance of CodeColosseum server (cocod).

Dependencies:
- NodeJS
- TypeScript
- Angular
- CodeColosseum 

- NodeJS
```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  source ~/.bashrc
  nvm list-remote
  nvm install --lts
```
  
- TypeScript
```bash
  npm install -g typescript
```

Angular
```bash
  npm install -g @angular/cli
```

CodeColosseum ( for the server ) 
```bash
  source install_talight.sh
  tald
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
ng serve
```

To create new components (ex: views ) 
```bash
ng generate component component-name
```

To build a "production" version, the build artifacts will be stored in the `dist/` directory.
```bash
ng build
```

__This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.__
