# Web Project - Flashcard App

The 4 main files are `App.js`, `Frontend.js`, `server.js` and `iniDB.js`.<br>
If you are an **evaluator**, we recommend only reading sections **Configure and launch**, **Features** and **Usage** .

The objective of this project is to implement a MERN (Mongo - Express - React - Node) Flashcard App. For this project, we will be using a server-client configuration with a database. The goal is that a user could fetch and edit flashcards from the database (with the help of the server) and then use them to study.

## Prerequisites

- NodeJs
- The Mongodb server executable for your OS, which can be found [here](https://www.mongodb.com/try/download/enterprise)
- nodemon
- mongoose
- express JS

## Configure and launch

To launch this app, you first need to clone this repository.

The next steps will teach you how to launch the project. If at any point you feel the need to restart the database from scratch, you can delete the content of the `data` folder and then relaunch the database initializer for your next launch sequence.

### Launch the Mongodb database

Before this step you first need to extract the folder from the archive, name it `mongodb` and put it at the root of the repository and create a `data` at the root.

Then, you need to open a terminal at the root of the repository and run :

```bash
./mongodb/bin/mongod --port 3010 --dbpath ./data
```

### Install Node libraries (first launch)

To install Node libraries, you need to open a terminal in the `Node` folder and run :

```bash
npm install
```

### Launch the database initializer (first launch or database reset)

Now, if it is your first launch, or you want to reset your database, you need to follow this step.

Open a terminal in the `Node` folder and run :

```bash
npx nodemon ./backend/iniDB.js
```

Then, when the console shows the message "done", you can kill the app with `CTRL+C`.

### Launch the server

You can now launch the server. For this, you will need to start a terminal in the `Node` folder and then run :

```bash
npx ndemon ./backend/server.js
```

### Launch the client (Node)

Finally, you can now start the client. For this, you will need to start the Node reactor. To do so, you need to start a terminal in the `Node` folder and then run :

```bash
npm start
```

You can now use the app.

## Features

The following features are supported in this project.

1. Initialize the database with premade theme and flashcards
2. View all the themes from the database
3. Add and remove themes from the database
4. Preview the flashcards from a theme
5. Add and remove flashcards from a theme
6. Visualize the flashcards of a specific theme

## Usage

While everything is launched :

1. To add a theme : click on the `Add a new theme` button.
2. To remove a theme : click on the theme to delete, then click on the `Delete an existing theme` button.
3. To add a flashcard : click on the theme you want to edit, then click on the `Add a new flashcard` button.
4. To remove a flashcard : click on the theme you want to edit, then click on the `Delete the flashcard` button next to the question of the flashcard to delete.
5. To visualize the flashcards of a specific theme : click on the theme you want to study, then click on the `Study` button.

