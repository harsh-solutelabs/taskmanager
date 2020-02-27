const { MongoClient, ObjectID } = require("mongodb");
const urlConnection = "mongodb://127.0.0.1:27017";
const databaseName = "tast-manager";

MongoClient.connect(
  urlConnection,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("fail");
    }
    const db = client.db(databaseName);
    // const updatePromise = db.collection("tasks").updateOne(
    //   {
    //     _id: new ObjectID("5e5658a954bfa4240fac1ff0")
    //   },
    //   {
    //     $set: {
    //       completed: "false"
    //     }
    //   },
    //   {
    //     upsert: true
    //   }
    // );
    // updatePromise
    //   .then(result => {
    //     console.log("result", result);
    //   })
    //   .catch(error => {
    //     console.error("error", error);
    //   });
    // })
    db.collection("tasks")
      .updateMany(
        {
          completed: "true"
        },
        {
          $set: {
            completed: "false"
          }
        }
      )
      .then(result => {
        console.log("result", result.modifiedCount);
      })
      .catch(error => {
        console.error("error", error);
      });
  }
);
