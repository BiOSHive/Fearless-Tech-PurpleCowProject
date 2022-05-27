import express from 'express';

//initial router
const router = express.Router();

//create array if items equal to an array of objects from items.json
//these objects will not be stored its a mock database 
const cubbyItems = [
    {
        childsName: "Mikayla",
        itemName: "Diapers",
        quantity: 100
    },

    {
        childsName: "Myles",
        itemName: "Baby Wipes",
        quantity: 200
    },

]

//create a request
router.get('/items', (req, res) => {   
    res.send(cubbyItems);
});

//adding items to database above 
//downloaded postman to test out post request
//http://localhost:3000/ to test post route 
router.post('/', (req, res) => {    
   const item = req.body; //object item will be stored in body 

   cubbyItems.push(item); //to add the item object to the database 

    res.send(` Yay! ${cubbyItem.childsName}'s cubby has been updated with ${cubbyItem.itemName}. She has ${cu}`); //for client side 
});

//export so that i can use in index.js file 
export default router;

//using postman to update data: 
// once downloaded, change to POST, select raw, text=json
//then add json data 