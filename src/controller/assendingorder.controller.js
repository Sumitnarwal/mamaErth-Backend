
const express = require("express");
const User = require("../models/user.module");
const router = express.Router();



router.get("/dis", async (req, res) => {
    try {
    //   const page=req.query.page
    //   const pagesize=req.query.size || 55
    //   const skip=(page-1)*pagesize

      const user = await User.find().sort({price:-1}).lean().exec();
        return res.send(user);
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
});
router.get("/ass", async (req, res) => {
    try {
    //   const page=req.query.page
    //   const pagesize=req.query.size || 55
    //   const skip=(page-1)*pagesize

      const user = await User.find().sort({price:1}).lean().exec();
        return res.send(user);
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
});

module.exports = router;