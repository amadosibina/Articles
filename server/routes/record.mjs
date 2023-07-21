import  express  from "express";
import Article from "../db/conn.mjs";

const router = express.Router();


router.get("/", async (req, res)=>{
    let result = await Article.find({});
    res.send(result).status(200);
});

router.post("/", async (req, res)=>{
    let newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    let result = await newArticle.save();
    res.send(result).status(204);
});

router.get("/:articleTitle", async (req, res)=>{
    const query = {title: req.params.articleTitle};
    let result = await  Article.findOne(query);

    res.send(result).status(200);

})

router.patch("/:id", async (req, res) =>{
    
    const query = { _id: req.params.id };
    let update = {
        title:req.body.title,
        content:req.body.content
    };

    let result = Article.updateOne(query, update);

    res.send(result).status(200);
})

router.delete("/:id", async (req, res)=>{

    const query = { _id: req.params.id };
    let result = await Article.deleteOne(query);
    res.send(result).status(200);
});

export default router;