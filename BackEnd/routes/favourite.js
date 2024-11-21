const router = require("express").Router();
const { authenticateToken } = require("./userAuth");
const User = require("../models/user");

//add book to favorites
router.put("/add-to-favourite",authenticateToken ,async(req,res)=>{
    try{
        const {bookid, id}=req.headers;
        const userData = await User.findById(bookid);
        const isBookFavorite = userData.favourites.includes(bookid);
        if(isBookFavorite){
            return res.status(400).json({ message: "Book is already in your favourites" });
        }
        await User.findById(id,{$push:{favourites: [bookid]}});
        return res.status(400).json({message:"Book added in favourites"});
    }catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router;