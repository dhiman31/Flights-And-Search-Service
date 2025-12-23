# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh
  downloaded project
- Create a `.env` file in the root directory and add the following environment
  variable
  PORT=3000

  - Inside the root directory create `config` named folder and create a new file `config.json` and then add
  the following piece of json in it

`````````````````
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
``````````````````