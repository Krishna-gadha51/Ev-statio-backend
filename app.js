const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())




mongoose.connect("mongodb://krishnagadha:gadha55@ac-c6tjfyj-shard-00-00.7plurii.mongodb.net:27017,ac-c6tjfyj-shard-00-01.7plurii.mongodb.net:27017,ac-c6tjfyj-shard-00-02.7plurii.mongodb.net:27017/evststiondb?ssl=true&replicaSet=atlas-vpubjr-shard-0&authSource=admin&appName=Cluster0")

.then(()=>{
    console.log("mongodb connected")
})
.catch((error)=>{
    console.log(error)
})





const Booking = mongoose.model("Bookings",
    new mongoose.Schema({

        bookingId:String,
        ownerName:String,
        email:String,
        phone:String,
        vehicleRegistrationNumber:String,
        vehicleBrand:String,
        vehicleModel:String,
        batteryCapacity:String,
        connectorType:String,
        chargingDate:String,
        timeSlot:String,
        estimatedUnits:String,
        chargingBayNumber:String

    })
)













app.post("/add-book",async(req,res)=>{

    await Booking.create(req.body)

    res.json({
        status:"success"
    })

})



app.listen(3000,()=>{
    console.log("server started")
})