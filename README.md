# vuejs

##### Step1. frontend (Vue.js)

npm install -g yarn

npm i -g @vue/cli

vue create frontend

cd frontend

npm run serve

##### Step2. backend (Express)

npm install -g express-generator

express --view=pug backend

cd backend 

npm install 

npm start

##### Step3. webpack

frontend/vue.config.js

module.exports = {

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
  
}

cd frontend

npm run build

cd ../backend

npm start
