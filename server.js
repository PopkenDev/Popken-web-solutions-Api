const app = require("./index");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

mongoose
  .connect(
    "mongodb+srv://hermanpopken:LdBnD3Tk!12024@pws-db.fe1tv2g.mongodb.net/popken-web-solutions"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`);
});
