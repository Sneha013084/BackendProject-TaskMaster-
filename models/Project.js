
const mongoose = require('mongoose');
const{ Schema } = mongoose;

const projectSchema = new Schema(
    {
        name:{

        },
        description:{

        },
        user:{

            type: Schema.Types.ObjectId,
            ref:'User',
            required: true,
        },
    },
    {timestamps :true}
);

const Project = mongoose.model('Project', projectSchema);
module.exports =Project;