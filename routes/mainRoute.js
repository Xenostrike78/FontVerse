import {Router} from "express";
import { title } from "process";

const router = Router()
router.get("/",(req,res)=>{
    const content = {
        title:'FontVerse | Font Combinations'
    }
    res.render("index",content);
});

router.get("/how-it-works",(req,res)=>{
    const content = {
        title:"How It Works | FontVerse"
    }
    res.render("how_it_works",content);
});
router.get("/gallery",(req,res)=>{
    const content = {
        title:"Font Gallery | FontVerse"
    }
    res.render("gallery",content);
});

router.use("/technicality",(req,res)=>{
    const content = {
        title:"Technicality  | FontVerse"
    }
    res.render("technicality",content);
});

export default router;