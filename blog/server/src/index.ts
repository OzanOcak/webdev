import express,{Express,Request,Response} from 'express'

const PORT=5000
const app:Express = express()

app.get('/',(req:Request,res:Response)=>{
    res.send("hello");
})
app.get('/bonjour',(req:Request,res:Response)=>{
    res.send("Bonjour my french")
})

app.listen(PORT,()=>{
    console.log(`server is listening port ${PORT}`);
    
})