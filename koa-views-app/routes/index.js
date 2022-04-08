const router = require("koa-router")();
router.get("/", async function (ctx, next) {
  ctx.state = {
    title: "Koa.js from ejs",
  };
  await ctx.render("index");
});
module.exports = router;
