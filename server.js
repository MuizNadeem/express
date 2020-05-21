const express = require("express");
const app = express();
const axios = require("axios");
const port = process.env.PORT || 4000;

app.get("/:symbol", async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const { data } = await axios.get(
    `https://api.stocktwits.com/api/2/streams/symbol/${symbol}.json`
  );

  res.send(data);
});

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App started on https://%s:%s", host, port);
});
