const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const Like = require('./models/timeModel')

const dev = process.env.NODE_ENV !== 'production'

const next = require('next')
const app = next( { dev } )
const handle = app.getRequestHandler()


app.prepare().then(() => {
   const server = express()

   server.use(express.json())

   server.post('/' ,async (req ,res) => {

    try {
      const {name, number , Type , lastName} = req.body;

    if(!name || !number || !Type || !lastName){
      return res.send({errMessage:"تمامی فیلد ها الزامی است!"})
    }
    if(number.length !== 11){
      return res.send({errMessage:" تعداد رقم های شماره تلفن باید 11 رقم باشد!"})
    }
    if(number.charAt(0) !== "0" || number.charAt(1) !== "9" ) {
      return res.send({errMessage:" لطفا شماره تلفن صحیح را وارد نمایید!"})
    }
    if(name.length > 14){
      return res.send({errMessage:" تعداد کاراکتر های نام نمیتواند بیشتر 14 باشد!"})
    }
    if(lastName.length > 18){
      return res.send({errMessage:" تعداد کاراکتر های نام خانوادگی نمیتواند بیشتر 18 باشد!"})
    }
      const newTime = new Like({
            Type,
            name,
            number,
            lastName,
          }).save()
        
    }catch(err){
      res.send({errMessage:"پیام ارسال نشد"})
    }

  })

server.get('*', (req,res) => {
   return handle(req,res)
})

const PORT = process.env.PORT || 27017

server.listen(PORT ,() => console.log('server connected on 8080'))
mongoose.connect(process.env.MONGODB_URI , {useNewUrlParser:true ,useUnifiedTopology:true} , err => {
   if(err) return console.log(err);
   console.log('mongodb connected')
})
   
})