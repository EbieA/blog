const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/post")

dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(console.log("Connected to Mongodb"))
.catch(err => console.log(err));


app.use("/api/auth", authRoute)  
app.use("/api/user", userRoute)  
app.use("/api/posts", postRoute)  

app.listen("5000", () => {
    console.log(`Server is running on port 5000`);
})