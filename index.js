//wil listen for connections

const server = require("./api/server.js");

const port = 8000;
server.listen(port, () =>
  console.log(
    `\n Your the best around, nothins every gonna bring you down ${port}`
  )
);
