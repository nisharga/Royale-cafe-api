const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const coffee = [
  {
    id: 1,
    name: "Iced Espresso",
    img: "./img/coffee1.jpg",
    price: 14,
    description:
      "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener.",
  },
  {
    id: 2,
    name: "Cold Brew",
    img: "./img/coffee2.jpg",
    price: 12,
    description:
      "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours",
  },
  {
    id: 3,
    name: "Frappuccino",
    img: "./img/coffee3.jpg",
    price: 11,
    description:
      "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink thats topped with whipped cream and syrup",
  },
  {
    id: 4,
    name: "Nitro Coffee",
    img: "./img/coffee4.jpg",
    price: 5,
    description:
      "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency",
  },
  {
    id: 5,
    name: "Sugar free Coffee",
    img: "./img/coffee5.jpg",
    price: 3,
    description:
      "A Sugar free Coffee is brew coffee with a frothy, Guinness-like consistency",
  },
  {
    id: 6,
    name: "Espresso Coffee",
    img: "./img/coffee6.jpg",
    price: 50,
    description:
      "You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos",
  },
];

app.get("/", (req, res) => {
  res.send(coffee);
});

app.listen(port, () => {
  console.log("port listen");
});
