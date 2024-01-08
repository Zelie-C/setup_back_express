import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

let app = express();
app.use(cors());
app.use(bodyParser.json());

const port = parseInt(process.env.PORT as string) || 4000;

app.get('/',(_, res) => {
  res.status(200);
  res.send("Hello World!!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })