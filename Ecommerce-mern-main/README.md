# Ecommerce-mern
This is a simple Ecommerce website built by using MERN Stack

## Run Locally

### 1. Clone repo

```
$ git clone https://github.com/Vidushika0316/Ecommerce-mern.git
$ cd Ecommerce-mern
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/shoppingegy
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection
  
  ### 4. Run Backend

```
$ cd backend
$ npm install
$ npm start
```
### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```
### 6. Seed Users and Products

- Run this on browser: http://localhost:5000/api/seed
- It returns admin email and password and 4 sample products

### 7. Reason for choosing MERN Stack 

- MERN Stack's blend of technologies makes it perfect for creating a wide range of apps. It makes app deployment quick and simple.
- There are numerous learning resources available, including tutorials and blogs.

### 8. Other key features I am expecting to add

- Functionalities related to shipping
- Functionalities related to order Action
- Admin profile


