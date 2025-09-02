
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

// creating user model

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,

        },
        email:{
            type:String,
            required:true,
            unique:true,
    
        },
        password:{
            type:String,
            required:true,
            minlength:6,

        },
    },
        {timestamps: true},

  
);

//presave the password to hash the the password

userSchema.pre('save', async (next) {
    if(!this.isModified ('password')){
        return next();
    }
    // salting of the password

    try{
        const salt = await bcrypt.genSalt(10);
        this.password  =  await bcrypt.hash(this.password,salt)
        next();
    }catch(error){
        next(error);
    }
});

//
userSchema.methods.matchPassword=  async function (enteredPassword){

return await bcrypt.compare(enteredPassword,this.password)
}

const User = mongoose.model('User', userSchema)
module.exports= User ;