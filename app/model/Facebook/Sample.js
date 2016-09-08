var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ActivitySchema = new Schema({
	id 			: ObjectId,
    userId      : String,
    jenis		: {type: Number, min: 0, max:5 },
    followId    : String,
    produkId    : String,
    created_at   : { type : Date, default: Date.now }
});

//jenis activigy
//0 = post
//1 = like
//2 = comment
//3 = bid
//4 = mark as sold
//5 = follow

module.exports = mongoose.model('Activity', ActivitySchema);
