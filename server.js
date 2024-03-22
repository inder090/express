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
    const p = products.filter(p => p.price <= price)
    res.send(p)

    
})

// app.get("/products/searchkey", (req, res) => {
//     const searchkey = req.query.searchkey;
//     const f = products.filter((i) =>
//         i.description.include(searchkey).toLocaleLowerCase ||
//         i.title.include(searchkey).toLocaleLowerCase
//     );
//     res.send(f);
// })
app.get('/productss/searchkey', (req, res) => {
    const searchkey = req.query.searchkey;
    const filtered = products.filter((item) => item.description.toLowerCase().includes(searchkey) || item.title.toLowerCase().includes(searchkey));
    res.send(filtered)
});

app.get("/products/kearch/searchkey", (req, res) => {
    const searchkey = req.query.brand;
    const k = req.query.cat;
    const p = products.filter((product) => product.brand.toLowerCase().includes(searchkey) && product.category.toLowerCase().includes(k))
      res.send(p)
})

app.listen(port, () => {
    console.log(`server is running ${port}`)
});
