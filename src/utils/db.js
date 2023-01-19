const mongoose= require('mongoose');
mongoose.set('strictQuery', false)
module.exports= function connect(){

    return mongoose.connect('mongodb+srv://suraj:suraj123@cluster0.dugw8ja.mongodb.net/mock11?retryWrites=true&w=majority', { useNewUrlParser: true })
}
//'mongodb+srv://suraj:suraj123@cluster0.dugw8ja.mongodb.net/mock11?retryWrites=true&w=majority'