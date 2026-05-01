const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

function checkSuccess() {
  console.log("Hello from CI pipeline 🚀");

  const success = true;

  if (!success) {
    throw new Error("Something failed!");
  }

  return "OK";
}

app.get('/', (req, res) => {
  res.send(checkSuccess());
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = checkSuccess;