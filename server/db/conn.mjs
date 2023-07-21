import mongoose from "mongoose";



main().catch(err=>console.log(err));

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", 
  {useNewUrlParser: true, useUnifiedTopology: true});
}


const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model("articles", articleSchema);





export default Article;