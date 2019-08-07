/***********************************

Mongodb module

**************************************/

// Notes:
  // How to perform all the CRUD operations
    // Create
    // Read
    // Update
    // Delete

  // We need to perfom all these operations in order
  // to manage our data succesfully.

    // 1st. Creating a collection in the database.
      // Connecting to the database is an asynchronous operation.
      // In order to create a document we us insertOne is an asynchronous function.

      // 2nd. Reading or fetching collections from the database.
          // Two methods from fetching(retriving) data from a database.
          // find() - Allows to fetch multiple documents out of the database.
          // findOne() - Allows us to fetch an individual document.

    // Promises are an enhacement for callbacks
          // making it easier to manage our asynchronous code.

    // A promise is nothing more that an object with
    // a few methods we can access.

    //  3rd. Updating documents using promises instead of callbacks.
      // Two methods for updating documents.
        // updateOne().
        // updateMany().

        // Operators.
          // $set --- Sets the value of a field in a document.
          // $inc ---- Increments the value of the field by the specified amount.

    // 4th. Deleting documents.
      // Methods for deleting documents in collection.
        // deleteOne()
        // deleteMany()

// Function call.
// Takes one parameter,
// loads mongodb npm module.
// Stores output in the variable mongodb.
const mongodb = require('mongodb');
// Property call.
// using object name.
// The following property allows us to work
// with Object id's.
// Stores output in the variable ObjectID.
const ObjectID = mongodb.ObjectID;
// Property call
// using object.
// MongoClient gives the function neccesary to connect to our
// database to perfom the four CRUD operations.
// Stores output in the variable MongoClient.
const MongoClient = mongodb.MongoClient;

// Defines connection URL,
// stores output in the variable connectionURL.
const connectionURL = 'mongodb://127.0.0.1:27017';
// Creates database.
const databaseName = 'task-manager';

// Method call
// using object name.
// Takes three arguments to set up the connections.
// First one is the connection URL, the second one is an
// options object, which takes one option to parse url
// so that it can connect to the server, the third one
// is a callback function that will get called when we are connected to
// the database.
// If the first argument exits in the callback that means everything went wrong,
// if the second argument exist everything went well and now you are
// connected to the database.
// Gives connection to the database.
MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {

  // Builds if statement.
  // Checks to see if any error occur.
  if(error) {

    // Outputs to the console.
    console.log('Unable to connect to databse');

  }

  // Method call
  // using object name.
  // Takes one parameter,
  // the name of the database you are trying to manipulate.
  // Stores output in the variable db.
  const db = client.db(databaseName);

  // Method call
  // using object name.
  // Takes three parameters,
  // the first is a filter to select the document
  // to update, the second parameter are options to
  // be applied to the document, and finally a promise if no
  // callback is passed.
  // Second function takes one parameter,
  // a function to run when things go well and
  // catch to register a function when things didn't go well.
  //db.collection('users').updateOne({

    // Targets document by its id.
    // Stores output in the property _id.
    //_id: new ObjectID("5d40f744d949077a39981a0f")

  //}, {

    // Updates we want to apply.
    // This operator allows us to set new values
    // to the fields in our documents.
    //$set: {

      // Customizes the field name of the document.
      //name: 'Mike'

    //}

  //}).then((result) => {

    // Outputs to the console.
    //console.log(result);

  //}).catch((error) => {

    // Outputs to the console.
    //console.log(error);

  //});

  // Method call
  // using object name.
  // Takes three parameters,
  // the first is a filter to select the document
  // to update, the second parameter are options to
  // be applied to the document, and finally a promise if no
  // callback is passed.
  // Second function takes one parameter,
  // a function to run when things go well and
  // catch to register a function when things didn't go well.
  //db.collection('users').updateOne({

    // Targets document by its id.
    // Stores output in the property _id.
    //_id: new ObjectID("5d40f744d949077a39981a0f")

  //}, {

    // Updates we want to apply.
    // This operator allows us to set new values
    // to the fields in our documents.
    //$inc: {

      // Customizes the field age of the document.
      //age:

    //}

  //}).then((result) => {

    // Outputs to the console.
    //console.log(result);

  //}).catch((error) => {

    // Outputs to the console.
    //console.log(error);

  //});

  // Method call
  // using object name.
  // Takes three parameters,
  // the first is a filter to select the document
  // to update, the second parameter are options to
  // be applied to the document, and finally a promise if no
  // callback is passed.
  // Second function takes one parameter,
  // a function to run when things go well and
  // catch to register a function when things didn't go well.
  //db.collection('tasks').updateMany({

    // Targets all task is the task document where completed == false.
    //completed: false

  //}, {

    // Updates we want to apply.
    // This operator allows us to set new values
    // to the fields in our documents.
    //$set: {

      // Customizes the field completed of the document.
      //completed: true

    //}

  //}).then((result) => {

    // Outputs to the console.
    //console.log(result.modifiedCount);

  //}).catch((error) => {

    // Outputs to the console.
    //console.log(error);

  //});

  // Method call
  // using object name.
  // Takes three parameters,
  // the filter to select the document to remove,
  // options settings, and a promise if no callback is passed.
  db.collection('users').deleteMany({

    // Deletes field.
    age: 27

  }).then((result) => {

    // Outputs to the console.
    console.log(result);

  }).catch((error) => {

    console.log(error);

  });

  // Method call
  // using object name.
  // Takes three parameters,
  // the filter to select the document to remove,
  // the options settings, and a promise if no callback is passed.
  db.collection('tasks').deleteOne({

    // Deletes field.
    description: "Clean the house"

  }).then((result) => {

    // Outputs to the console.
    console.log(result);

  }).catch((error) => {

    // Outputs to the console.
    console.log(error);

  });

});
