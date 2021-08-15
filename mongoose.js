const mongoose=require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true, useUnifiedTopology: true});


const db=mongoose.connection;

const Car=new Schema({
    _id:mongoose.ObjectId,
    name:String,
    type:String,
    price:Number,
    fuel:String
});


let car=mongoose.model("car",Car);

let brezza=new car({
    _id:new mongoose.Types.ObjectId(),
    name:"Brezza",
    type:"Hatchback",
    price:990000,
    fuel:"petrol"
},{collection:"cars"});


 db.on('error', function (err) { throw err }); 

 db.once('open', function callback() {
    console.log('connected!');
    //db.close();
    /* brezza.save((err,data)=>{
        if(err){
            console.error(new Error(err));
            db.close();
        }
        else{
            console.log("data saved");
            db.close();
        }
    }) */

    car.find({type:"hatchback"},(err,data)=>{
        if( err ){ throw err }
        else{
            console.log(data);
        } 
    },)

});