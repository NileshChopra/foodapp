const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoURI = 'mongodb://nileshchopra14:Typo_0912@ac-t3tzbjw-shard-00-00.e9mbhih.mongodb.net:27017,ac-t3tzbjw-shard-00-01.e9mbhih.mongodb.net:27017,ac-t3tzbjw-shard-00-02.e9mbhih.mongodb.net:27017/gofooddb?ssl=true&replicaSet=atlas-12k5t2-shard-0&authSource=admin&retryWrites=true&w=majority';
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.food_category = catData;
                    }
                })
                // if(err) console.log(err);
                // else{
                //     global.food_items = data;
                //     // console.log(global.food_items);
                // }
            })
        }
    });
}
module.exports = mongoDB;
