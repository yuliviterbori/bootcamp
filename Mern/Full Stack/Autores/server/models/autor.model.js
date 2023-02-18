const mongoose = require('mongoose');
const AutorSchema = new mongoose.Schema({
    name: { 
        type: String,
        validate: {
            validator: function(v) {
              return v.lenght >3 ;
            },
            message: props => `${props.value} debe tener al menos 3 caracteres`
        },
        required: [true, 'User name required']
        },
    price: { type: Number },
    description: {type: String}
}, { timestamps: true });
module.exports.Autor = mongoose.model('Autor', AutorSchema);