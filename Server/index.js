const { app } = require("./app");

const PORT = process.env.PORT || 2105;
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
