const express = require("express");
const app = express();

//our restaurant store
let restaurants = {};

// adding body parseing middlewares
app.use(express.urlencoded());
app.use(express.json());

// home request
// app.get("/", (request, response) => {
//     response.sendStatus(404);
// });

// create a restaurant post api

app.get("/", (req, res) => {
    res.send(`
    <form action="/restaurant" method="post">
    <input name="name" value="123" />
    <input name="category" type="" value="oizza" />
    <input name="rating" type="number" value="5" />
    <input name="position" type="number" value="200" />
    <input type="submit" value="submit" />    
    </form>
    `);
});
app.get("/and", (req, res) => {
    res.send(`
    <form action="/restaurants" method="post">
    <input name="orderPriority" value="123" />
    <input name="distanceLimit" type="number" value="oizza" />
    <input name="category"  value="5" />
    <input name="position" type="number"  value="200" />
    <input type="submit" value="submit" />    
    </form>
    `);
});

app.post("/restaurant", (req, res) => {
    let { name, position, category, rating } = req.body;

    //first we check if there are missimg fields
    if (!(name && position && category && rating)) {
        return res.status(400).json({
            message: "There are missing fields",
        });
    }
    let valid = true;
    // loop through the restaurants object to check if there is one with a similar position
    for (restaurant in restaurants) {
        //if position is found assign false to valid the break the loop
        if (restaurants[restaurant].position == position) {
            valid = false;
            break;
        }
    }
    //mow check if valid is false if so we send a json message
    if (!valid) {
        return res.status(400).json({
            message: "Position not available",
        });
    }
    //we check if position is from 0 - 200
    if (position < 0 || position > 200) {
        return res.status(400).json({
            message: "position must be an integer from 0 to 200",
        });
    }
    // then we check if the rating is greater than 5
    if (rating > 5 || rating < 1) {
        return res.status(400).json({
            message: "rating must be an integer from 0 to 5",
        });
    }

    restaurants[name] = { name, position, category, rating };
    res.status(201).json({ name, position, category, rating });
});

app.post("/restaurants", (req, res) => {
    let { category, orderPriority, distanceLimit, position } = req.body;

    if (!(category && orderPriority && position)) {
        return res.status(400).json({ message: "There are missing fields" });
    }
    console.log(distanceLimit, "jmn");
    // if no distance limit we set it to 30
    if (!distanceLimit || orderPriority == "rating") {

        distanceLimit = 30;
    } else if (
        //we then check if it is an integer or not
        !Number.isInteger(distanceLimit)
    ) {

        return res.status(400).json({
            message: "Distance limit should be an integer",
        });
    }

    if (!(orderPriority == "distance" || orderPriority == "rating")) {
        return res.status(400).json({
            message: "Order priority should be either distance or rating",
        });
    }

    //we check if position is from 0 - 200
    if (position < 0 || position > 200) {
        return res.status(400).json({
            message: "position must be an integer from 0 to 200",
        });
    }

    let lower, higher;

    if (position < distanceLimit) {
        lower = distanceLimit - position;
    } else {
        lower = position - distanceLimit;
    }
    higher = Number(distanceLimit) + Number(position);
    let restaurantsFound = [];
    // console.log(higher, lower);
    // console.log(category, "jmn");
    for (restaurant in restaurants) {
        //console.log(category)
        if (
            restaurants[restaurant].position >= lower &&
            restaurants[restaurant].position <= higher &&
            restaurants[restaurant].category === category
        ) {
            restaurantsFound.push(restaurants[restaurant]);
        }
    }
    console.log(restaurantsFound);

    if (restaurantsFound.length == 0) {
        return res.status(400).json({
            message: "Position not available",
        });
    }
    // console.log(category, "jmdjkn");
    if (orderPriority == "rating") {
        // console.log(category, "jkmdsklncn");
        let results = restaurantsFound.sort((a, b) => {
            return b.rating - a.rating;
        });
        // console.log(restaurantsFound);
        res.status(200).json(results);
        return;
    }
    // console.log(category, "jkmdlncn");
    let results = restaurantsFound.sort((a, b) => {
        return a.position - b.position;
    });
    //console.log(restaurantsFound);
    res.status(200).json(results);
});

app.delete("/restaurants", (req, res) => {
    restaurants = [];
    res.status(204).json({
        message: "all restaurants have been deleted",
    });
});

//app.listen(2000)
module.exports = app;