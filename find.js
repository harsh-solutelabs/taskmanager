const { MongoClient, ObjectID } = require("mongodb");
const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "tast-manager";
MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Uable to connect to database");
    }
    const db = client.db(databaseName);
    // db.collection("users").findOne({ name: "Raj", age: 0 }, (error, users) => {
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5e5645f824b3521df0d446e1") },
    //   (error, users) => {
    //     if (error) {
    //       return console.log("Unable to Fetch");
    //     }
    //     console.log(users);
    //   }
    // );

    db.collection("tasks")
      .find({ completed: "true" })
      .toArray((error, task) => {
        console.log(task);
      });
  }
);
