const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
});
router.get("/about", (req,res)=>{
    res.status(200).render("about")
})
module.exports = router;
