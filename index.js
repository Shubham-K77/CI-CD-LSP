//Imports:
import express from "express";
const app = express();
app.use(express.json()); //For Json Returns and parsing.
const PORT = 3000; //Must be an env variable but it's considerd bad to push the env file. Hence I am writing it down as it is.

//Creating the Api route's:
app.get("/api/v1/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.get("/api/v1/health", (req, res) => {
  res.send({
    message: "Successfully Checked.",
    status: "healthy",
    timestamp: Date.now(),
    uptime: process.uptime(),
  });
});

app.post("/api/v1/users", (req, res) => {
  const { name, age } = req.body;
  res.send({
    message: "Successfully Created!",
    data: `Name: ${name} Age: ${age}`,
  });
});

//Server Creation:
const server = app.listen(PORT, () => {
  console.log(`The App is running in the port: ${PORT}`);
});

//Export for testing the server:
export default server;
