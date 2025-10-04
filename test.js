//Imports:
import server from "./index.js";
//Informing others who are running my code that the test conditions are now being executed.
console.log("Running all of the tests...");
//This file will be running in the github actions automatically doing the proper testings.
setTimeout(async () => {
  try {
    //Here, we test the conditions like: DB Connections, API endpoints returns, Business logics, Syntax errors
    console.log("✅ Running the tests: ");
    //The Root Api response test:
    const rootResponse = await fetch("http://localhost:3000/api/v1/");
    const rootData = await rootResponse.json();
    console.log("✅ Successfully fetched the root response.", rootData.message);
    //The Health Api response test:
    const healthResponse = await fetch("http://localhost:3000/api/v1/health");
    const healthData = await healthResponse.json();
    console.log(
      "✅ Successfully fetched the health response.",
      healthData.message,
      healthData.status
    );
    //The Creation Api response test:
    const createResponse = await fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Shubham", age: "22" }),
    });
    const createData = await createResponse.json();
    console.log(
      "✅ Successfully fetched the creation response.",
      createData.message,
      createData.data
    );
    //Completion of test:
    console.log("✅ All tests passed!");
    server.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    server.close();
    process.exit(1);
  }
}, 2000);
