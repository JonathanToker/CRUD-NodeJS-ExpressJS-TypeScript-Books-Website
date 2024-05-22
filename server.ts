import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import router from "./routes";
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressEjsLayouts);
app.use(express.static("public"));
app.use("/", router);
app.listen(process.env.PORT || 3000);
