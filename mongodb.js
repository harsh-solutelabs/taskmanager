// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");
const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "tast-manager";

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());
MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable  to connect");
    }
    // console.log("Connected correctly");

    const db = client.db(databaseName);

    db.collection("users").insertOne(
      {
        _id: id,
        name: "Harsh",
        age: 21
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }
        console.log(result.ops);
      }
    );

    // db.collection("user").insertMany(
    //   [
    //     {
    //       name: "harsh",
    //       age:
    //     },
    //     {
    //       name: "param",
    //       age: 21
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documnets");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "clean the house",
    //       completed: "true"
    //     },
    //     { description: "clean the house", completed: "true" },
    //     {
    //       description: "clean the house",
    //       completed: "true"
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert tasks");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
