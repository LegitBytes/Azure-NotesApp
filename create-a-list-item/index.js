const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const url = "mongodb://notes-db1:LUx2cV06xxWHjJSj6Gju4ncOxeOBnxTT4CJrtV92Rb5xRQU5m7AYuBsXHXafHX0kSzAQuGqOsdHLxmzJ4OYipQ==@notes-db1.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@notes-db1@";
const client = new MongoClient(url);

module.exports = async function (context, req) {
    await client.connect();
    const database = client.db("crud");
    const collection = database.collection("wishlist");
    let data = { _id: uuidv4(), ...req.body };
    await collection.insertOne(data);

  return (context.res = {
    status: 200,
    body: data,
  });
};