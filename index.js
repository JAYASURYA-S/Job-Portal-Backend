import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/jobRoutes.js";
dotenv.config();

const PORT = process.env.PORT || 6000;

//create an express app
const app = express();

//use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create an DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => console.log(err));

//routers
app.use("/jobs", router);

//running a server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
