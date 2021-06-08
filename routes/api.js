const express = require('express');
const Post = require("./models/runs") // new
let router = express.Router();
router.use(require("express").json());

router.use(function (req, res, next) {
    console.log(req.url, "@", Date.now());
    next();
});

router.route("/").get((req, res)=> {
    require("../api/index.js").run(req, res);
})

router.get("/runs", async (req, res) => {
    const docs = await Tank.find();
  const changes = docs[0].num
	res.send(changes)
})

module.exports = router;