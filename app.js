const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const app = express();

var items = ["111","222"];


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));




app.get('/',(req,res) =>{

    var today = new Date;
    var currentDay = today.getDay;
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{newItems:items,kindOfDay:day});
})






app.post('/',(req,res)=>{
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/')
    
})











app.listen(5000,()=>{console.log("Server running at port 5000...")})