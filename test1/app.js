const http = require("http"),
  fs = require("fs"),
  myModule = require("./module"),
  path = require("path");
const { url } = require("inspector");

http.createServer((req, res) => {
    if (req.url == "/" || req.url == "index") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(fs.readFileSync("./pages/index.html", "utf8"));
    }
    if (req.url.includes("public")) {
        if(path.extname(req.url)=='.css'){
            res.writeHead(200,{'Content-Type':myModule.getContentType(path.extname(req.url))})
            res.write(fs.readFileSync('.'+req.url,'utf8'));
        }
        console.log (myModule.getContentType(path.extname(req.url))); 
    }

    // if(req.url=='/public/style.css'){
    //     res.writeHead(200,{'Content-Type':'text/css'});
    //     res.write(fs.readFileSync('./public/style.css','utf8'))
    // }
    res.end();
  })
  .listen(8080);
