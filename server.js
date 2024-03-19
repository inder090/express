const Express = require("express");
const { products } = require("./data");
const app = Express();

const port = 5000;

app.get("/", (req, res) => {
    res.send("hello world ");
})

app.get("/products", (req, res) => {
    res.send(products);
})

app.get("/products/:category", (req, res) => {
    const category = req.params.category;

    const a = products.filter((p) => p.brand.toLocaleLowerCase() === category.toLocaleLowerCase())
    res.send(a)
})
app.get("/:price", (req, res) => {
    const price = req.params.price;
    // console.log(price);
    const p = products.filter(p => p.price <= price)
    res.send(p)
})

app.listen(port, () => {
    console.log(`server is running ${port}`)
});