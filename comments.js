let express=require('express');
let app=express();
let path=require('path');
let {read}=require('fs');
app.use(express.urlencoded({ extended:true}))
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
let comments=[
    {
        comment:'Hello!!!world',
        username:'AI'
    },
    {
        comment:'Hey!!How r u ?',
        username:'Human'
    }
];
app.get('/comments',(req,res)=>{
    res.render('comm.ejs',{comments:comments})
})
app.get('/comments/new',(req,res)=>{
    res.render('new.ejs')
})
app.post('/comments',(req,res)=>{
    console.log(req.body)
    let {names,doubts}=req.body;
    comments.push({names,doubts})
    res.send("It Worked!")
})
app.listen(567,()=>{
    console.log("Hello");
})