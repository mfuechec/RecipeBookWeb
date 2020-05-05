import React from 'react';

const SearchByIngredients = (props) => {
    let selection = [];
    if (props.whatIsSelected === 'food') {
        selection = [
            {
                value: "Chicken"
            },
            {
                value: "Salmon"
            },
            {
                value: "Beef"
            },
            {
                value: "Pork"
            },
            {
                value: "Avocado"
            },
            {
                value: "Apple Cider Vinegar"
            },
            {
                value: "Asparagus"
            },
            {
                value: "Aubergine"
            },
            {
                value: "Baby Plum Tomatoes"
            },
            {
                value: "Bacon"
            },
            {
                value: "Baking Powder"
            },
            {
                value: "Balsamic Vinegar"
            },
            {
                value: "Basil"
            },
            {
                value: "Basil Leaves"
            },
            {
                value: "Basmati Rice"
            },
            {
                value: "Bay Leaf"
            },
            {
                value: "Bay Leaves"
            },
            {
                value: "Beef Brisket"
            },
            {
                value: "Beef Fillet"
            },
            {
                value: "Beef Gravy"
            },
            {
                value: "Beef Stock"
            },
            {
                value: "Bicarbonate Of Soda"
            },
            {
                value: "Biryani Masala"
            },
            {
                value: "Black Pepper"
            },
            {
                value: "Black Treacle"
            },
            {
                value: "Borlotti Beans"
            },
            {
                value: "Bowtie Pasta"
            },
            {
                value: "Bramley Apples"
            },
            {
                value: "Brandy"
            },
            {
                value: "Bread"
            },
            {
                value: "Breadcrumbs"
            },
            {
                value: "Broccoli"
            },
            {
                value: "Brown Lentils"
            },
            {
                value: "Brown Rice"
            },
            {
                value: "Brown Sugar"
            },
            {
                value: "Butter"
            },
            {
                value: "Cacao"
            },
            {
                value: "Cajun"
            },
            {
                value: "Canned Tomatoes"
            },
            {
                value: "Cannellini Beans"
            },
            {
                value: "Cardamom"
            },
            {
                value: "Carrots"
            },
            {
                value: "Cashew Nuts"
            },
            {
                value: "Cashews"
            },
            {
                value: "Caster Sugar"
            },
            {
                value: "Cayenne Pepper"
            },
            {
                value: "Celeriac"
            },
            {
                value: "Celery"
            },
            {
                value: "Celery Salt"
            },
            {
                value: "Challots"
            },
            {
                value: "Charlotte Potatoes"
            },
            {
                value: "Cheddar Cheese"
            },
            {
                value: "Cheese"
            },
            {
                value: "Cheese Curds"
            },
            {
                value: "Cherry Tomatoes"
            },
            {
                value: "Chestnut Mushroom"
            },
            {
                value: "Chicken Breast"
            },
            {
                value: "Chicken Breasts"
            },
            {
                value: "Chicken Legs"
            },
            {
                value: "Chicken Stock"
            },
            {
                value: "Chicken Thighs"
            },
            {
                value: "Chickpeas"
            },
            {
                value: "Chili Powder"
            },
            {
                value: "Chilled Butter"
            },
            {
                value: "Chilli"
            },
            {
                value: "Chilli Powder"
            },
            {
                value: "Chinese Broccoli"
            },
            {
                value: "Chocolate Chips"
            },
            {
                value: "Chopped Onion"
            },
            {
                value: "Chopped Parsley"
            },
            {
                value: "Chopped Tomatoes"
            },
            {
                value: "Chorizo"
            },
            {
                value: "Christmas Pudding"
            },
            {
                value: "Cilantro"
            },
            {
                value: "Cinnamon"
            },
            {
                value: "Cinnamon Stick"
            },
            {
                value: "Cloves"
            },
            {
                value: "Coco Sugar"
            },
            {
                value: "Cocoa"
            },
            {
                value: "Coconut Cream"
            },
            {
                value: "Coconut Milk"
            },
            {
                value: "Colby Jack Cheese"
            },
            {
                value: "Cold Water"
            },
            {
                value: "Condensed Milk"
            },
            {
                value: "Coriander"
            },
            {
                value: "Coriander Leaves"
            },
            {
                value: "Coriander Seeds"
            },
            {
                value: "Corn Tortillas"
            },
            {
                value: "Cornstarch"
            },
            {
                value: "Cream"
            },
            {
                value: "Creme Fraiche"
            },
            {
                value: "Cubed Feta Cheese"
            },
            {
                value: "Cucumber"
            },
            {
                value: "Cumin"
            },
            {
                value: "Cumin Seeds"
            },
            {
                value: "Curry Powder"
            },
            {
                value: "Dark Brown Sugar"
            },
            {
                value: "Dark Soft Brown Sugar"
            },
            {
                value: "Dark Soy Sauce"
            },
            {
                value: "Demerara Sugar"
            },
            {
                value: "Diced Tomatoes"
            },
            {
                value: "Digestive Biscuits"
            },
            {
                value: "Dill"
            },
            {
                value: "Doner Meat"
            },
            {
                value: "Double Cream"
            },
            {
                value: "Dried Oregano"
            },
            {
                value: "Dry White Wine"
            },
            {
                value: "Egg Plants"
            },
            {
                value: "Egg Rolls"
            },
            {
                value: "Egg White"
            },
            {
                value: "Egg Yolks"
            },
            {
                value: "Eggs"
            },
            {
                value: "Enchilada Sauce"
            },
            {
                value: "English Mustard"
            },
            {
                value: "Extra Virgin Olive Oil"
            },
            {
                value: "Fajita Seasoning"
            },
            {
                value: "Farfalle"
            },
            {
                value: "Fennel"
            },
            {
                value: "Fennel Bulb"
            },
            {
                value: "Fennel Seeds"
            },
            {
                value: "Fenugreek"
            },
            {
                value: "Feta"
            },
            {
                value: "Fish Sauce"
            },
            {
                value: "Flaked Almonds"
            },
            {
                value: "Flax Eggs"
            },
            {
                value: "Flour"
            },
            {
                value: "Flour Tortilla"
            },
            {
                value: "Floury Potatoes"
            },
            {
                value: "Free-range Egg, Beaten"
            },
            {
                value: "Free-range Eggs, Beaten"
            },
            {
                value: "French Lentils"
            },
            {
                value: "Fresh Basil"
            },
            {
                value: "Fresh Thyme"
            },
            {
                value: "Freshly Chopped Parsley"
            },
            {
                value: "Fries"
            },
            {
                value: "Full Fat Yogurt"
            },
            {
                value: "Garam Masala"
            },
            {
                value: "Garlic"
            },
            {
                value: "Garlic Clove"
            },
            {
                value: "Garlic Powder"
            },
            {
                value: "Garlic Sauce"
            },
            {
                value: "Ghee"
            },
            {
                value: "Ginger"
            },
            {
                value: "Ginger Cordial"
            },
            {
                value: "Ginger Garlic Paste"
            },
            {
                value: "Ginger Paste"
            },
            {
                value: "Golden Syrup"
            },
            {
                value: "Gouda Cheese"
            },
            {
                value: "Granulated Sugar"
            },
            {
                value: "Grape Tomatoes"
            },
            {
                value: "Greek Yogurt"
            },
            {
                value: "Green Beans"
            },
            {
                value: "Green Chilli"
            },
            {
                value: "Green Olives"
            },
            {
                value: "Green Red Lentils"
            },
            {
                value: "Green Salsa"
            },
            {
                value: "Ground Almonds"
            },
            {
                value: "Ground Cumin"
            },
            {
                value: "Ground Ginger"
            },
            {
                value: "Gruyère"
            },
            {
                value: "Hard Taco Shells"
            },
            {
                value: "Harissa Spice"
            },
            {
                value: "Heavy Cream"
            },
            {
                value: "Honey"
            },
            {
                value: "Horseradish"
            },
            {
                value: "Hot Beef Stock"
            },
            {
                value: "Hotsauce"
            },
            {
                value: "Ice Cream"
            },
            {
                value: "Italian Fennel Sausages"
            },
            {
                value: "Italian Seasoning"
            },
            {
                value: "Jalapeno"
            },
            {
                value: "Jasmine Rice"
            },
            {
                value: "Jerusalem Artichokes"
            },
            {
                value: "Kale"
            },
            {
                value: "Khus Khus"
            },
            {
                value: "King Prawns"
            },
            {
                value: "Kosher Salt"
            },
            {
                value: "Lamb"
            },
            {
                value: "Lamb Loin Chops"
            },
            {
                value: "Lamb Mince"
            },
            {
                value: "Lasagne Sheets"
            },
            {
                value: "Lean Minced Beef"
            },
            {
                value: "Leek"
            },
            {
                value: "Lemon"
            },
            {
                value: "Lemon Juice"
            },
            {
                value: "Lemon Zest"
            },
            {
                value: "Lemons"
            },
            {
                value: "Lettuce"
            },
            {
                value: "Lime"
            },
            {
                value: "Little Gem Lettuce"
            },
            {
                value: "Macaroni"
            },
            {
                value: "Mackerel"
            },
            {
                value: "Madras Paste"
            },
            {
                value: "Marjoram"
            },
            {
                value: "Massaman Curry Paste"
            },
            {
                value: "Medjool Dates"
            },
            {
                value: "Meringue Nests"
            },
            {
                value: "Milk"
            },
            {
                value: "Minced Garlic"
            },
            {
                value: "Miniature Marshmallows"
            },
            {
                value: "Mint"
            },
            {
                value: "Monterey Jack Cheese"
            },
            {
                value: "Mozzarella Balls"
            },
            {
                value: "Muscovado Sugar"
            },
            {
                value: "Mushrooms"
            },
            {
                value: "Mustard"
            },
            {
                value: "Mustard Powder"
            },
            {
                value: "Mustard Seeds"
            },
            {
                value: "Nutmeg"
            },
            {
                value: "Oil"
            },
            {
                value: "Olive Oil"
            },
            {
                value: "Onion Salt"
            },
            {
                value: "Onions"
            },
            {
                value: "Orange"
            },
            {
                value: "Orange Zest"
            },
            {
                value: "Oregano"
            },
            {
                value: "Oyster Sauce"
            },
            {
                value: "Paprika"
            },
            {
                value: "Parma Ham"
            },
            {
                value: "Parmesan"
            },
            {
                value: "Parmesan Cheese"
            },
            {
                value: "Parmigiano-reggiano"
            },
            {
                value: "Parsley"
            },
            {
                value: "Peanut Butter"
            },
            {
                value: "Peanut Oil"
            },
            {
                value: "Peanuts"
            },
            {
                value: "Peas"
            },
            {
                value: "Pecorino"
            },
            {
                value: "Penne Rigate"
            },
            {
                value: "Pepper"
            },
            {
                value: "Pine Nuts"
            },
            {
                value: "Pitted Black Olives"
            },
            {
                value: "Plain Chocolate"
            },
            {
                value: "Plain Flour"
            },
            {
                value: "Plum Tomatoes"
            },
            {
                value: "Potato Starch"
            },
            {
                value: "Potatoes"
            },
            {
                value: "Prawns"
            },
            {
                value: "Puff Pastry"
            },
            {
                value: "Raspberry Jam"
            },
            {
                value: "Raw King Prawns"
            },
            {
                value: "Red Chile Flakes"
            },
            {
                value: "Red Chilli"
            },
            {
                value: "Red Chilli Powder"
            },
            {
                value: "Red Onions"
            },
            {
                value: "Red Pepper"
            },
            {
                value: "Red Pepper Flakes"
            },
            {
                value: "Red Wine"
            },
            {
                value: "Refried Beans"
            },
            {
                value: "Rice"
            },
            {
                value: "Rice Noodles"
            },
            {
                value: "Rice Stick Noodles"
            },
            {
                value: "Rice Vermicelli"
            },
            {
                value: "Rigatoni"
            },
            {
                value: "Rocket"
            },
            {
                value: "Rolled Oats"
            },
            {
                value: "Rosemary"
            },
            {
                value: "Saffron"
            },
            {
                value: "Sage"
            },
            {
                value: "Sake"
            },
            {
                value: "Salsa"
            },
            {
                value: "Salt"
            },
            {
                value: "Salted Butter"
            },
            {
                value: "Sausages"
            },
            {
                value: "Sea Salt"
            },
            {
                value: "Self-raising Flour"
            },
            {
                value: "Semi-skimmed Milk"
            },
            {
                value: "Sesame Seed"
            },
            {
                value: "Shallots"
            },
            {
                value: "Shredded Mexican Cheese"
            },
            {
                value: "Shredded Monterey Jack Cheese"
            },
            {
                value: "Small Potatoes"
            },
            {
                value: "Smoked Paprika"
            },
            {
                value: "Smoky Paprika"
            },
            {
                value: "Sour Cream"
            },
            {
                value: "Soy Sauce"
            },
            {
                value: "Soya Milk"
            },
            {
                value: "Spaghetti"
            },
            {
                value: "Spinach"
            },
            {
                value: "Spring Onions"
            },
            {
                value: "Squash"
            },
            {
                value: "Stir-fry Vegetables"
            },
            {
                value: "Strawberries"
            },
            {
                value: "Sugar"
            },
            {
                value: "Sultanas"
            },
            {
                value: "Sunflower Oil"
            },
            {
                value: "Tamarind Ball"
            },
            {
                value: "Tamarind Paste"
            },
            {
                value: "Thai Fish Sauce"
            },
            {
                value: "Thai Green Curry Paste"
            },
            {
                value: "Thai Red Curry Paste"
            },
            {
                value: "Thyme"
            },
            {
                value: "Tomato Ketchup"
            },
            {
                value: "Tomato Puree"
            },
            {
                value: "Tomatoes"
            },
            {
                value: "Toor Dal"
            },
            {
                value: "Tuna"
            },
            {
                value: "Turmeric"
            },
            {
                value: "Turmeric Powder"
            },
            {
                value: "Turnips"
            },
            {
                value: "Vanilla"
            },
            {
                value: "Vanilla Extract"
            },
            {
                value: "Veal"
            },
            {
                value: "Vegan Butter"
            },
            {
                value: "Vegetable Oil"
            },
            {
                value: "Vegetable Stock"
            },
            {
                value: "Vegetable Stock Cube"
            },
            {
                value: "Vinaigrette Dressing"
            },
            {
                value: "Vine Leaves"
            },
            {
                value: "Vinegar"
            },
            {
                value: "Water"
            },
            {
                value: "White Chocolate Chips"
            },
            {
                value: "White Fish"
            },
            {
                value: "White Fish Fillets"
            },
            {
                value: "White Vinegar"
            },
            {
                value: "White Wine"
            },
            {
                value: "Whole Milk"
            },
            {
                value: "Whole Wheat"
            },
            {
                value: "Wholegrain Bread"
            },
            {
                value: "Worcestershire Sauce"
            },
            {
                value: "Yogurt"
            },
            {
                value: "Zucchini"
            },
            {
                value: "Pretzels"
            },
            {
                value: "Cream Cheese"
            },
            {
                value: "Icing Sugar"
            },
            {
                value: "Toffee Popcorn"
            },
            {
                value: "Caramel"
            },
            {
                value: "Caramel Sauce"
            },
            {
                value: "Tagliatelle"
            },
            {
                value: "Fettuccine"
            },
            {
                value: "Clotted Cream"
            },
            {
                value: "Corn Flour"
            },
            {
                value: "Mussels"
            },
            {
                value: "Fideo"
            },
            {
                value: "Monkfish"
            },
            {
                value: "Vermicelli Pasta"
            },
            {
                value: "Baby Squid"
            },
            {
                value: "Squid"
            },
            {
                value: "Fish Stock"
            },
            {
                value: "Pilchards"
            },
            {
                value: "Black Olives"
            },
            {
                value: "Onion"
            },
            {
                value: "Tomato"
            },
            {
                value: "Duck"
            },
            {
                value: "Duck Legs"
            },
            {
                value: "Chicken Stock Cube"
            },
            {
                value: "Pappardelle Pasta"
            },
            {
                value: "Paccheri Pasta"
            },
            {
                value: "Linguine Pasta"
            },
            {
                value: "Sugar Snap Peas"
            },
            {
                value: "Crusty Bread"
            },
            {
                value: "Fromage Frais"
            },
            {
                value: "Clams"
            },
            {
                value: "Passata"
            },
            {
                value: "Rapeseed Oil"
            },
            {
                value: "Stilton Cheese"
            },
            {
                value: "Lamb Leg"
            },
            {
                value: "Lamb Shoulder"
            },
            {
                value: "Apricot"
            },
            {
                value: "Butternut Squash"
            },
            {
                value: "Couscous"
            },
            {
                value: "Minced Beef"
            },
            {
                value: "Turkey Mince"
            },
            {
                value: "Barbeque Sauce"
            },
            {
                value: "Sweetcorn"
            },
            {
                value: "Goose Fat"
            },
            {
                value: "Duck Fat"
            },
            {
                value: "Fennel"
            },
            {
                value: "Red Wine Vinegar"
            },
            {
                value: "Haricot Beans"
            },
            {
                value: "Rosemary"
            },
            {
                value: "Butter Beans"
            },
            {
                value: "Pinto Beans"
            },
            {
                value: "Tomato Sauce"
            },
            {
                value: "Tomato Sauce"
            },
            {
                value: "Mascarpone"
            },
            {
                value: "Mozzarella"
            },
            {
                value: "Ricotta"
            },
            {
                value: "Dried Apricots"
            },
            {
                value: "Capers"
            },
            {
                value: "Banana"
            },
            {
                value: "Raspberries"
            },
            {
                value: "Blueberries"
            },
            {
                value: "Walnuts"
            },
            {
                value: "Pecan Nuts"
            },
            {
                value: "Maple Syrup"
            },
            {
                value: "Light Brown Soft Sugar"
            },
            {
                value: "Dark Brown Soft Sugar"
            },
            {
                value: "Dark Chocolate Chips"
            },
            {
                value: "Milk Chocolate"
            },
            {
                value: "Dark Chocolate"
            },
            {
                value: "Pumpkin"
            },
            {
                value: "Shortcrust Pastry"
            },
            {
                value: "Peanut Cookies"
            },
            {
                value: "Gelatine Leafs"
            },
            {
                value: "Peanut Brittle"
            },
            {
                value: "Peaches"
            },
            {
                value: "Yellow Pepper"
            },
            {
                value: "Green Pepper"
            },
            {
                value: "Courgettes"
            },
            {
                value: "Tinned Tomatos"
            },
            {
                value: "Chestnuts"
            },
            {
                value: "Wild Mushrooms"
            },
            {
                value: "Truffle Oil"
            },
            {
                value: "Paneer"
            },
            {
                value: "Naan Bread"
            },
            {
                value: "Lentils"
            },
            {
                value: "Roasted Vegetables"
            },
            {
                value: "Kidney Beans"
            },
            {
                value: "Mixed Grain"
            },
            {
                value: "Tahini"
            },
            {
                value: "Tortillas"
            },
            {
                value: "Udon Noodles"
            },
            {
                value: "Cabbage"
            },
            {
                value: "Shiitake Mushrooms"
            },
            {
                value: "Mirin"
            },
            {
                value: "Sesame Seed Oil"
            },
            {
                value: "Baguette"
            },
            {
                value: "Vine Tomatoes"
            },
            {
                value: "Suet"
            },
            {
                value: "Swede"
            },
            {
                value: "Ham"
            },
            {
                value: "Oysters"
            },
            {
                value: "Stout"
            },
            {
                value: "Lard"
            },
            {
                value: "Lamb Kidney"
            },
            {
                value: "Beef Kidney"
            },
            {
                value: "Haddock"
            },
            {
                value: "Smoked Haddock"
            },
            {
                value: "Brussels Sprouts"
            },
            {
                value: "Raisins"
            },
            {
                value: "Currants"
            },
            {
                value: "Custard"
            },
            {
                value: "Mixed Peel"
            },
            {
                value: "Redcurrants"
            },
            {
                value: "Blackberries"
            },
            {
                value: "Hazlenuts"
            },
            {
                value: "Braeburn Apples"
            },
            {
                value: "Red Food Colouring"
            },
            {
                value: "Pink Food Colouring"
            },
            {
                value: "Blue Food Colouring"
            },
            {
                value: "Yellow Food Colouring"
            },
            {
                value: "Apricot Jam"
            },
            {
                value: "Marzipan"
            },
            {
                value: "Almonds"
            },
            {
                value: "Black Pudding"
            },
            {
                value: "Baked Beans"
            },
            {
                value: "White Flour"
            },
            {
                value: "Yeast"
            },
            {
                value: "Fruit Mix"
            },
            {
                value: "Dried Fruit"
            },
            {
                value: "Cherry"
            },
            {
                value: "Glace Cherry"
            },
            {
                value: "Treacle"
            },
            {
                value: "Oatmeal"
            },
            {
                value: "Oats"
            },
            {
                value: "Egg"
            },
            {
                value: "Beef Shin"
            },
            {
                value: "Bouquet Garni"
            },
            {
                value: "Single Cream"
            },
            {
                value: "Red Wine Jelly"
            },
            {
                value: "Apples"
            },
            {
                value: "Goats Cheese"
            },
            {
                value: "Prosciutto"
            },
            {
                value: "Unsalted Butter"
            },
            {
                value: "Brie"
            },
            {
                value: "Tarragon Leaves"
            },
            {
                value: "Chives"
            },
            {
                value: "Pears"
            },
            {
                value: "White Chocolate"
            },
            {
                value: "Star Anise"
            },
            {
                value: "Tiger Prawns"
            },
            {
                value: "Custard Powder"
            },
            {
                value: "Desiccated Coconut"
            },
            {
                value: "Frozen Peas"
            },
            {
                value: "Minced Pork"
            },
            {
                value: "Creamed Corn"
            },
            {
                value: "Sun-Dried Tomatoes"
            },
            {
                value: "Dijon Mustard"
            },
            {
                value: "Tabasco Sauce"
            },
            {
                value: "Canola Oil"
            },
            {
                value: "Cod"
            },
            {
                value: "Salt Cod"
            },
            {
                value: "Ackee"
            },
            {
                value: "Jerk"
            },
            {
                value: "Ground Beef"
            },
            {
                value: "Baby Aubergine"
            },
            {
                value: "Paella Rice"
            },
            {
                value: "Scotch Bonnet"
            },
            {
                value: "Oxtail"
            },
            {
                value: "Broad Beans"
            },
            {
                value: "Red Snapper"
            },
            {
                value: "Malt Vinegar"
            },
            {
                value: "Rice Vinegar"
            },
            {
                value: "Water Chestnut"
            },
            {
                value: "Tofu"
            },
            {
                value: "Doubanjiang"
            },
            {
                value: "Fermented Black Beans"
            },
            {
                value: "Scallions"
            },
            {
                value: "Sichuan Pepper"
            },
            {
                value: "Wonton Skin"
            },
            {
                value: "Starch"
            },
            {
                value: "Rice wine"
            },
            {
                value: "Cooking wine"
            },
            {
                value: "Duck Sauce"
            },
            {
                value: "Gochujang"
            },
            {
                value: "Bean Sprouts"
            },
            {
                value: "Noodles"
            },
            {
                value: "Wood Ear Mushrooms"
            },
            {
                value: "Dark Rum"
            },
            {
                value: "Light Rum"
            },
            {
                value: "Rum"
            },
            {
                value: "English Muffins"
            },
            {
                value: "Muffins"
            },
            {
                value: "White Wine Vinegar"
            },
            {
                value: "Smoked Salmon"
            },
            {
                value: "Mars Bar"
            },
            {
                value: "Rice Krispies"
            },
            {
                value: "Ancho Chillies"
            },
            {
                value: "Almond Milk"
            },
            {
                value: "Allspice"
            },
            {
                value: "Almond Extract"
            },
            {
                value: "Tripe"
            },
            {
                value: "Goat Meat"
            },
            {
                value: "Black Beans"
            },
            {
                value: "Anchovy Fillet"
            },
            {
                value: "Ras el hanout"
            },
            {
                value: "Filo Pastry"
            },
            {
                value: "Orange Blossom Water"
            },
            {
                value: "Candied Peel"
            },
            {
                value: "Grand Marnier"
            },
            {
                value: "Sherry"
            },
            {
                value: "Rose water"
            },
            {
                value: "Mixed Spice"
            },
            {
                value: "Mincemeat"
            },
            {
                value: "Sweet Potatoes"
            },
            {
                value: "Bread Rolls"
            },
            {
                value: "Bun"
            },
            {
                value: "Potatoe Buns"
            },
            {
                value: "Ground Pork"
            },
            {
                value: "Pork Chops"
            },
            {
                value: "Yukon Gold Potatoes"
            },
            {
                value: "Yellow Onion"
            },
            {
                value: "Beef Stock Concentrate"
            },
            {
                value: "Chicken Stock Concentrate"
            },
            {
                value: "Persian Cucumber"
            },
            {
                value: "Mayonnaise"
            },
            {
                value: "Sriracha"
            },
            {
                value: "Rhubarb"
            },
            {
                value: "Pita Bread"
            },
            {
                value: "Bulgur Wheat"
            },
            {
                value: "Quinoa"
            }
        ];
    }
    if (props.whatIsSelected === 'drinks') {
        selection = [
            {
                value: "Light rum"
            },
            {
                value: "Applejack"
            },
            {
                value: "Gin"
            },
            {
                value: "Dark rum"
            },
            {
                value: "Sweet Vermouth"
            },
            {
                value: "Strawberry schnapps"
            },
            {
                value: "Scotch"
            },
            {
                value: "Apricot brandy"
            },
            {
                value: "Triple sec"
            },
            {
                value: "Southern Comfort"
            },
            {
                value: "Orange bitters"
            },
            {
                value: "Brandy"
            },
            {
                value: "Lemon vodka"
            },
            {
                value: "Blended whiskey"
            },
            {
                value: "Dry Vermouth"
            },
            {
                value: "Amaretto"
            },
            {
                value: "Tea"
            },
            {
                value: "Champagne"
            },
            {
                value: "Coffee liqueur"
            },
            {
                value: "Bourbon"
            },
            {
                value: "Tequila"
            },
            {
                value: "Vodka"
            },
            {
                value: "Añejo rum"
            },
            {
                value: "Bitters"
            },
            {
                value: "Sugar"
            },
            {
                value: "Kahlua"
            },
            {
                value: "demerara Sugar"
            },
            {
                value: "Dubonnet Rouge"
            },
            {
                value: "Lime juice"
            },
            {
                value: "Irish whiskey"
            },
            {
                value: "Apple brandy"
            },
            {
                value: "Carbonated water"
            },
            {
                value: "Cherry brandy"
            },
            {
                value: "Creme de Cacao"
            },
            {
                value: "Grenadine"
            },
            {
                value: "Port"
            },
            {
                value: "Coffee brandy"
            },
            {
                value: "Red wine"
            },
            {
                value: "Rum"
            },
            {
                value: "Grapefruit juice"
            },
            {
                value: "Ricard"
            },
            {
                value: "Sherry"
            },
            {
                value: "Cognac"
            },
            {
                value: "Sloe gin"
            },
            {
                value: "Apple juice"
            },
            {
                value: "Pineapple juice"
            },
            {
                value: "Lemon juice"
            },
            {
                value: "Sugar syrup"
            },
            {
                value: "Milk"
            },
            {
                value: "Strawberries"
            },
            {
                value: "Chocolate syrup"
            },
            {
                value: "Yoghurt"
            },
            {
                value: "Mango"
            },
            {
                value: "Ginger"
            },
            {
                value: "Lime"
            },
            {
                value: "Cantaloupe"
            },
            {
                value: "Berries"
            },
            {
                value: "Grapes"
            },
            {
                value: "Kiwi"
            },
            {
                value: "Tomato juice"
            },
            {
                value: "Cocoa powder"
            },
            {
                value: "Chocolate"
            },
            {
                value: "Heavy cream"
            },
            {
                value: "Galliano"
            },
            {
                value: "Peach Vodka"
            },
            {
                value: "Ouzo"
            },
            {
                value: "Coffee"
            },
            {
                value: "Spiced rum"
            },
            {
                value: "Water"
            },
            {
                value: "Espresso"
            },
            {
                value: "Angelica root"
            },
            {
                value: "Orange"
            },
            {
                value: "Cranberries"
            },
            {
                value: "Johnnie Walker"
            },
            {
                value: "Apple cider"
            },
            {
                value: "Everclear"
            },
            {
                value: "Cranberry juice"
            },
            {
                value: "Egg yolk"
            },
            {
                value: "Egg"
            },
            {
                value: "Grape juice"
            },
            {
                value: "Peach nectar"
            },
            {
                value: "Lemon"
            },
            {
                value: "Firewater"
            },
            {
                value: "Lemonade"
            },
            {
                value: "Lager"
            },
            {
                value: "Whiskey"
            },
            {
                value: "Absolut Citron"
            },
            {
                value: "Pisco"
            },
            {
                value: "Irish cream"
            },
            {
                value: "Ale"
            },
            {
                value: "Chocolate liqueur"
            },
            {
                value: "Midori melon liqueur"
            },
            {
                value: "Sambuca"
            },
            {
                value: "Cider"
            },
            {
                value: "Sprite"
            },
            {
                value: "7-Up"
            },
            {
                value: "Blackberry brandy"
            },
            {
                value: "Peppermint schnapps"
            },
            {
                value: "Creme de Cassis"
            },
            {
                value: "Jack Daniels"
            }
        ];
    }

    return (
        <div id='SearchByIngredientsContainer'>
            <div id='SearchByIngredientsText'>Search for recipes by main ingredient.</div>
            <div id='SearchByIngredientsDropdown'>Dropdown</div>
        </div>
    )
}

export default SearchByIngredients;