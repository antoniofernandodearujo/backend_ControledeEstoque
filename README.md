# backend_StockControl
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/antoniofernandodearujo/app_orcamento_pessoal/blob/main/LICENSE)

## 👀 About the project

Project developed in order to put into practice concepts such as, creation of API Clients, server-side applications, using database and requests about it.
The application consists of a simple stock control, where it is possible to create, delete, update and read a product, that is
a CRUD, using a non-relational database, and also testing the routes in the API.

## 💻 Technologies used
### Back end
- JavaScript / Express
- Mongo DB / Mongo DB Compass (database visual tool)
- Insomnia (to do the API tests)

## 👨‍💻👩‍💻 How to run the project
### Requirements: 
- NodeJS.
- Install MongoDB and MongoDB Compass (to have a better view of the bd).
- Install the Insomnia (https://insomnia.rest/download) or Postman (https://www.postman.com/) 
Visual application to be able to test the routes created from the API, using JSON in the body of the request

### Step 1:
Make the connection with Mongo, if you are using MongoDB Compass, it is the first tab when opening the application.

<div display=flex flex-direction=row>
  <img src="https://github.com/antoniofernandodearujo/backend_ControledeEstoque/blob/main/assets/img1_mongo.png"/>
</div>

### Step 2:
In the first screen of Insomnia, an empty **Dashboard** will appear, if you have never used it, you can create a new collection,
give it the name you prefer, and it will enter the "" folder, which contains all the routes used in this project.

<div display=flex flex-direction=row>
  <img src="https://github.com/antoniofernandodearujo/backend_ControledeEstoque/blob/main/assets/img1_insomnia.png" width="400px" height="370px"/>
  <img src="https://github.com/antoniofernandodearujo/backend_ControledeEstoque/blob/main/assets/img2_insomnia.png"width="400px" height="370px"/>
</div>

### Step 3:
#### Only do this step if the other steps are ok!

- clone the repository
```bash
git clone https://github.com/antoniofernandodearujo/backend_ControledeStock
```

- install node_modules folder
```bash
npm install
```

- run the application
```bash
npm start
```

## 🧑🏾‍💻 Author
Antonio Fernando de Araujo Silva
### How to contact us?
If you want to discuss or if you have any questions, please contact:

[![Gmail](https://img.shields.io/badge/Gmail-darkred?style=for-the-badge&logo=gmail&logoColor=white)](mailto:afas@academico.ufpb.br)
