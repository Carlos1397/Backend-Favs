import { Schema, model } from 'mongoose';

const favoriteSchema = new Schema({
    title: String,
    description: String,
    link: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Favorite', favoriteSchema);