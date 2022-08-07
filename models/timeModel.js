const mongoose = require('mongoose')

const LikeSchema = mongoose.Schema({
    name:{type:String ,require:true},
    number:{type:String ,require:true},
    lastName:{type:String ,require:true},
    Type:{type:String ,require:true},
}
)
const Like = mongoose.model('visitTime', LikeSchema);

module.exports = Like