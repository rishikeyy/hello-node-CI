function checkSuccess() {
  console.log("Hello from CI pipeline 🚀");

  const success = true;

  if (!success) {
    throw new Error("Something failed!");
  }

  return "OK";
}

module.exports = checkSuccess;