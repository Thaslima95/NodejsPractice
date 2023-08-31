/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mydb');
db.createCollection('productslist')

db.getCollection('productslist').insertMany([
    {"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg"},{
        
    },
    {
        "title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/7/thumbnail.jpg"
    },{
        "title":"perfume Oil","description":"Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil","price":13,"discountPercentage":8.4,"rating":4.26,"stock":65,"brand":"Impression of Acqua Di Gio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/11/thumbnail.jpg"
    },{
        "title":"Fog Scent Xpressio Perfume","description":"Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men","price":13,"discountPercentage":8.14,"rating":4.59,"stock":61,"brand":"Fog Scent Xpressio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/13/thumbnail.webp"
    }
])

//find command

db.getCollection('productslist').findOne({title:'perfume Oil'})

db.getCollection('productslist').find({})

db.getCollection('productslist').find({stock:{$gt:50}})


db.getCollection('productslist').find({}, { _id: 0, title: 1,rating: 1 } )


db.getCollection('productslist').find().sort({'description':-1})




  
