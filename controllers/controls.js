
const model = require('../models/model')

const test = (req,res) =>{
    res.send('Working 🚀')
 }

const Create= async(req,res)=>{
    const {name,amount}=req.body
    const newModel=new model({
        Name:name,
        Amount:amount
        })
        try {
            const savedModel=await newModel.save()
            res.status(201).redirect('http://localhost/home')
            } 
        catch (error) {
                res.status(500).json({message:error.message})
                console.log(error);
                }
                
}

const Delete = async(req,res)=>{
    const {name} = req.body
    try {
        const deletedModel = await model.deleteOne({ Name: name })
        res.status(200).redirect("http://localhost/home")
        } catch (error) {
            res.status(500).json({ message: error.message })
            console.log(error);
            }
}

const Update = async(req,res)=>{
    const {oldname,name,amount}=req.body
    try {
         await model.findOneAndUpdate({ Name: oldname }, { Name:name , Amount: amount })
        res.status(200).redirect("http://localhost/home")
        } catch (error) {
            res.status(500).json({ message: error.message })
            console.log(error);
            }
}

 
const Read =async(req,res)=>{
    try {
        const readModel = await model.find()
        res.status(200).json(readModel)
        } catch (error) {
            res.status(500).json({ message: error.message })
            console.log(error);
            }

}


module.exports ={Create,Read,Update,test,Delete}