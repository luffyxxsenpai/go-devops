const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

const corsOptions = {
  origin: true, // Allow all origins
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable cookies and other credentials if needed
};

app.use(cors(corsOptions)); // Use the CORS middleware
const userRoute = require("./routes/useRoutes");

app.use(express.json());

// database connections
mongoose
.connect(process.env.URI)
.then(() => {
    console.log("DB connected succesfully ");
    app.listen(process.env.PORT, (err)=> {
      if(err) console.log(err);
      console.log("running successfully at", process.env.PORT );
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(userRoute);
