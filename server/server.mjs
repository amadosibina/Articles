import express from "express"
import cors from "cors";
import records from "./routes/record.mjs"


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

app.listen(PORT, ()=>{
  console.log(`server is running on ${PORT}`);
})

