# NestJS+Docker+MySQL Starter Pack 

This repository serves as a comprehensive starting point for developing web applications and RESTful services using NestJS, Docker, and MySQL. With this template, you can quickly kickstart your project without the hassle of initial setup. It's designed to streamline the development and deployment of scalable and maintainable applications.

## Requirements

Before getting started, make sure you have the following installed on your system:

- Docker
- Node.js (>= 16)
- npm (>= 7)

## Configuration

Create a .env file in the project's root directory and configure the necessary environment variables. You can use the following example as a guide:

```
NODE_ENV=development
PORT=3000
MYSQL_HOST=mysql
MYSQL_PORT=3306
MYSQL_USER=user
MYSQL_PASSWORD=password
MYSQL_DATABASE=mydb
MYSQL_ROOT_USER=user
MYSQL_ROOT_PASSWORD=rootpassword
```

Make sure to adjust the values according to your needs.

## Building the Docker Image

To create the Docker image of the application, run the following command from the project's root:

```
docker build -t api-api .
```

## Running with Docker Compose

We will use Docker Compose to run the application along with a MySQL database. Make sure you have configured the docker-compose.yml file as shown in your question.

From the project's root, execute the following command to start the containers:

```
docker-compose up
```

This will start the API on port 8080 and the MySQL database on port 36000, according to the configuration in the docker-compose.yml file.

The API should be accessible at http://localhost:8080. You can access it from your browser or use tools like Postman to test the endpoints.

## Scripts npm

The project includes several npm scripts that you can use during development:

- `npm run lint`: Run ESLint to check and fix code style issues.
- `npm test`: Run unit tests.
- `npm run test:watch`: Run tests in watch mode.
- `npm run test:cov`: Run tests and generate a coverage report.
- `npm run migration:run`: Run TypeORM migrations.
- `npm run migration:create --name=<name>`: Create a new TypeORM migration file with a specified name.
- `npm run migration:revert`: Revert the last TypeORM migration.

Make sure to adjust and customize these scripts according to your needs.
