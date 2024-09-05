import   mongoose from "mongoose";

export const dbConnection = () => {
    mongoose 
       .connect(process.env.MONGO_URI,{
           dbName: "RESTURANT",
       }) 
       .then(() => {
        console.log("Connected to databse succesfully");
       }) 
       .catch((err) => {
        console.log(`Some errors occured while connedting to databse! ${err}`);
       });
};