## Available Scripts
##Comando para instalar dependencias:

### `npm i`

## es nececsario agregar al proyecto el archivo config/env.js
```
export const ENV = 'local';

export const VERSION = 'v1';

export const API = {
    prod: '',
    stage: '',
    qa: '',
    dev: '',
    local: 'https://api.dev.myintelli.net',
};

export const SUPER_HERO = {
    prod: {
        url: '',
        accessKey: ''
    },
    stage: {
        url: '',
        accessKey: ''
    },
    qa: {
        url: '',
        accessKey: ''
    },
    dev: {
        url: '',
        accessKey: ''
    },
    local: {
        url: 'https://www.superheroapi.com/api.php',
        accessKey: '2963423560654933'
    },
};
```

##Comando para correr el proyecto:

### `npm start`




