const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema (
    {
        title:{
            type: String,
            required :true,

        },
        description:{
            type:String,
            trim:true,

        },
        status:{
            type:String,
            enum: ['To Do','In Progress', 'Done'],
            default : 'To do',

        },
        project:{
            type: Schema.Types.ObjectId,
            ref:'Project',
            required:true,
        },

    },
    {timestamps: true}
);
 const task = mongoose.model('Task', taskSchema);
 module.exports= task;

