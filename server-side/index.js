import express from "express";
// import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/students.js";

const app = express();
app.use(express.json());
app.use("/students", studentRoutes);

// app.use(bodyParser.json({ limit: "20mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Admin:sachin123@cluster0.1jbzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is Established and Running on port : ${PORT}`)
    )
  )
  .then((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
