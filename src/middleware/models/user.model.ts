import mongoose, {Document, Schema} from "mongoose";
import bcrypt from "bcrypt"
import config from 'config'

export interface UserDocument extends Document{
    email: string,
    name: string,
    password:string,
    createdAt:Date,
    updatedAt:Date
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function(next){
    let user = this as UserDocument
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel