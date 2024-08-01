const mongoose =require('mongoose')
const model = mongoose.Schema(
    {
        Name: {
            type: String,
            
            },
            Amount: {
                type: Number,
            }

        }
)

module.exports = mongoose.model('User',model)