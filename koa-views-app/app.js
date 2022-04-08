const path = require("path");
const Koa = require("koa");
const serve = require("koa-static");
const router = require("koa-router")();
const index = require("./routes/index");
const views = require("koa-views");
const PORT = process.env.PORT || 3000;
const app = new Koa();
app.use(serve(path.join(__dirname, "public")));
app.use(
  views(path.join(__dirname, "views"), {
    extension: "ejs",
  })
);
router.use("/", index.routes());
app.use(router.routes());
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
