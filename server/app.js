const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Cannot database", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send({
    message: "wellcame",
  });
});

require("./app/routes/product.routes")(app);
require("./app/routes/auth.routes")(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
