const { ObjectID, MongoClient } = require("mongodb");
const urlConnection = "mongodb://127.0.0.1:27017";
const databaseName = "tast-manager";

MongoClient.connect(
  urlConnection,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log(error);
    }
    console.log("success");

    const db = client.db(databaseName);
    db.collection("tasks")
      .deleteMany({
        completed: "false"
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
