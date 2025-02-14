# vuejs

##### Step0. Setup

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

source ~/.bashrc

nvm -v

##### Step1. frontend (Vue.js)

npm i -g @vue/cli

vue create frontend

cd frontend

npm run serve

##### Step2. backend (Express)

npm i -g express-generator

express --view=pug backend

cd backend

npm install

npm start

##### Step3. webpack

frontend/vue.config.js

```
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: '../backend/public',
})
```

cd frontend

npm run build

cd ../backend

npm start

## Trouble Shooting
Versions after this:

Platform: Ubuntu 18.04LTS

Node version: v14.5.0

npm version: 6.14.5

### npm ERR! typeerror Error: Missing required argument #1

sudo npm install -g n

sudo n latest

sudo npm install -g npm

hash -d npm

npm install


### sing app demo

https://flatlogic.com/templates/sing-app-vue/demo
