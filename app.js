import express from "express";
import * as dotenv from 'dotenv'
import path from 'path';
import {fileURLToPath} from 'url';
import bodyParser from "body-parser";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
dotenv.config();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/bocchi-front/public')));

var apiKeyGoogle = process.env.API_KEY_GOOGLE;

// app.all('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/bocchi-front/public/index.html'));
//   });

app.post("/signup", function(req, res) {
    console.log(req.body.email);
    console.log(req.body.password);
})

app.get("/category", function(req, res) {
    res.sendFile(path.join(__dirname, '/bocchi-front/public/index.html'));
})

app.get("/category/:categoryName", function(req, res) {
    var resultList = [];
    var restaurantListSushi = [{
        brandImg: "https://images.freeimages.com/images/large-previews/ac4/sushi-on-a-japanese-plate-9-1324901.jpg",
        name: "sushi1",
        star: "★★★★★",
        reviewStatement: "good",
        foodImg: "https://images.freeimages.com/images/large-previews/609/rainbow-roll-1329728.jpg",
        location: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL0iBq4dJDW0RadyRVf53vhc&key=${apiKeyGoogle}`,
        menuImg: "https://picsum.photos/200/300",
        openingHours: "9am to 6pm (today)"
    }, {
        brandImg: "https://images.freeimages.com/images/large-previews/72a/japanese-food-1328455.jpg",
        name: "name2",
        star: "star2",
        reviewStatement: "reviewStatement2",
        foodImg: "https://images.freeimages.com/images/large-previews/b58/japanese-food-1327491.jpg",
        location: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL0iBq4dJDW0RadyRVf53vhc&key=${apiKeyGoogle}`,
        menuImg: "https://picsum.photos/200/300",
        openingHours: "9am to 6pm (today)"
    }];

    var restaurantListDonburi = [{
        brandImg: "https://picsum.photos/200",
        name: "name1",
        star: "star1",
        reviewStatement: "reviewStatement1",
        foodImg: "foodImg1",
        location: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL0iBq4dJDW0RadyRVf53vhc&key=${apiKeyGoogle}`,
        menuImg: "https://picsum.photos/200/300",
        openingHours: "9am to 6pm (today)"
    }, {
        brandImg: "https://picsum.photos/200",
        name: "name2",
        star: "star2",
        reviewStatement: "reviewStatement2",
        foodImg: "foodImg2",
        location: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL0iBq4dJDW0RadyRVf53vhc&key=${apiKeyGoogle}`,
        menuImg: "https://picsum.photos/200/300",
        openingHours: "9am to 6pm (today)"
    }];

    var restaurantListRamen = [{
        brandImg: "https://picsum.photos/200",
        name: "name1",
        star: "star1",
        reviewStatement: "reviewStatement1",
        foodImg: "foodImg1",
        location: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL0iBq4dJDW0RadyRVf53vhc&key=${apiKeyGoogle}`,
        menuImg: "https://picsum.photos/200/300",
        openingHours: "9am to 6pm (today)"
    }, {
        brandImg: "https://picsum.photos/200",
        name: "name2",
        star: "star2",
        reviewStatement: "reviewStatement2",
        foodImg: "foodImg2",
        location: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL0iBq4dJDW0RadyRVf53vhc&key=${apiKeyGoogle}`,
        menuImg: "https://picsum.photos/200/300",
        openingHours: "9am to 6pm (today)"
    }];

    var restaurantListBurger = [{
        brandImg: "https://picsum.photos/200",
        name: "name1",
        star: "star1",
        reviewStatement: "reviewStatement1",
        foodImg: "foodImg1",
        location: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL0iBq4dJDW0RadyRVf53vhc&key=${apiKeyGoogle}`,
        menuImg: "https://picsum.photos/200/300",
        openingHours: "9am to 6pm (today)"
    }, {
        brandImg: "https://picsum.photos/200",
        name: "name2",
        star: "star2",
        reviewStatement: "reviewStatement2",
        foodImg: "foodImg2",
        location: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL0iBq4dJDW0RadyRVf53vhc&key=${apiKeyGoogle}`,
        menuImg: "https://picsum.photos/200/300",
        openingHours: "9am to 6pm (today)"
    }];

    var categoryName= req.params.categoryName;

    switch (categoryName){
        case "sushi":
            resultList = restaurantListSushi;
            break;
        case "donburi":
            resultList = restaurantListDonburi;
            break;
        case "ramen":
            resultList = restaurantListRamen;
            break;
        case "burger":
            resultList = restaurantListBurger;
            break;
        default:
            console.log("error");

    }

    res.json(resultList);
});

app.listen(process.env.PORT || 8080, function() {
    console.log("Server started on port 8080");
  });