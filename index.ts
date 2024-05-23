import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import router from "./routes";
import authorRouter from "./routes/authors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "./layouts/layout");
if (process.env.DATABASE_URL) {
  mongoose.connect(process.env.DATABASE_URL);
} else {
  console.error("DATABASE_URL environment variable not set!");
}
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));
app.use(expressEjsLayouts);
app.use(express.static("public"));
app.use("/", router);
app.use("/authors", authorRouter);
app.listen(process.env.PORT || 3000);
export default app;
