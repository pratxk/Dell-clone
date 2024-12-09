const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");
const colors = require("colors");
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const cartRoute = require("./routes/cartRoutes");
const swaggerJSdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000

// swaggerUi docs
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dell Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSdoc(options);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//routes
app.use("/users", userRoute);
app.use("/products",productRoute)
app.use("/cart", cartRoute);
//default home

app.use("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.listen(PORT, async () => {
  try {
    await connectDB;
    console.log(colors.rainbow("DB connected"));
  } catch (error) {
    console.log(error);
  }
  console.log(
    `Your server is listening to http://localhost:${PORT}`.bgWhite
      .red
  );
});
