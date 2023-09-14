import express from 'express'
import cors from 'cors'

let app = express();
app.use(cors());
const port = parseInt(process.env.PORT as string);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })