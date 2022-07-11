// send 쓰는건 비효율적이라서 이 방법 쓴다.

const express = require('express');

const app = express();
app.use("/public",express.static(__dirname+"/public"));
app.set("view engine","ejs");
// app.use(express.static("/public"));
// app.set('views','views');

app.get("/hello/:nameParam", (req, res) => {
  res.render("hello",{name: req.params.nameParam});
});

app.listen(3001);