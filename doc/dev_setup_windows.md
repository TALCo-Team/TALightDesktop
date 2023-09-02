# Windows: Dev Setup

## Dependencies

- NodeJS
- Yarn
- TypeScript
- Angular
- TALight

<br>

## Installation

### ***NodeJS***

Install NodeJS from this link ([NodeJS download](https://nodejs.org/it/download)) on your computer.

### ***PowerShell command***

Run these commands on PowerShell with admin privileges to install Yarn, Typescript and Angular Client

- Yarn

    ```shell
     npm install -g yarn
    ```

- Typescript

    ```shell
     yarn global add typescript
    ```

- Angular Client

    ```shell
     yarn global add @angular/cli
    ```

Run this command to enable scripting without certification

```shell
    Set-ExecutionPolicy Unrestricted -Scope LocalMachine
```

After press "*S*" for apply the change.

### ***Install TALight***

Follow instructions at this [link](https://github.com/romeorizzi/TALight/wiki/EN_Installation-on-Windows) for install TALight on Windows.

### ***Yarn***

```shell
  yarn install
```

Run this command in the TALightDesktop directory for install the program.

### ***Last step***

Install **<u>Google Chrome</u>** and **<u>Visual Studio Code</u>** on your computer and start the program with command "*ng server*" in the run and debug section.
