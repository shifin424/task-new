import Express from "express";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello, World!"); 
});

app.listen(3000, (error) => {
  if (error) {
    console.error('Error starting the server:', error);
  } else {
    console.log('Server started on port', 3000);
  }
});

// To Start the server node app.js
