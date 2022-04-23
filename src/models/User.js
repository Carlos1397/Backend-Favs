import { Schema, model } from 'mongoose';
import bycrypt from 'bcryptjs'
const UserSchema = new Schema({
    email: ({
        type: String, require: true, index: true
    }),
    password: ({
        type: String,
        required: true
    })
}, {
    timestamps: true,
    versionKey: false
})

UserSchema.statics.encryptedPassword = async (password) => {
    const key = await bycrypt.genSalt(5)
    return bycrypt.hash(password, key)
}
UserSchema.statics.compareencryptedPassword = async (password, receivedPassword) => {
    return await bycrypt.compare(password, receivedPassword)
}

export default model('User', UserSchema);