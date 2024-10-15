# Pasos para iniciar el proyecto
- npm init -y --> inicia el proyecto con configuraciones por defecto

- git init --> inicia el repositorio de git
- agregar .gitignore --> para ignorar archivos y no subirlos al repositorio https://www.toptal.com/developers/gitignore

- .editorconfig --> para tener un estandar de editor para todos los desarrolladores
- .eslintrc.json --> para tener un estandar de codigo

- index.js --> archivo principal de la aplicacion

# Dependencias a instalar
- nodemon --> para reiniciar el servidor automaticamente cuando se detectan cambios en el codigo
- eslint --> para tener un estandar de codigo
- prettier --> para tener un estandar de codigo
- jest --> para hacer pruebas unitarias

npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D ( -D es para instalar las dependencias del entorno de desarrollo)

# Configuración TypeScript
1- npm i typescript -D
2- npx tsc --init --> inicializa el archivo de configuracion de typescript
3-    {
     "compilerOptions": {
       "target": "es6",
       "module": "commonjs",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true,
       "outDir": "./dist",
       "rootDir": "./src"
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules", "**/*.spec.ts"]
   }
4- actualizar el package.json para agregar el comando de typescript
   "scripts": {
     "dev": "tsc && nodemon dist/index.js",
     "start": "node dist/index.js",
     "lint": "eslint src --ext .ts"
   }
5- configura eslint para trabajar con typescript
   npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
      {
     "parser": "@typescript-eslint/parser",
     "parserOptions": {
       "ecmaVersion": 2018,
       "sourceType": "module"
     },
     "extends": [
       "eslint:recommended",
       "plugin:@typescript-eslint/recommended",
       "prettier"
     ],
     "env": {
       "es6": true,
       "node": true,
       "jest": true
     },
     "rules": {
       "no-console": "warn"
     }
   }
