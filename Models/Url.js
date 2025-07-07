import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    shortCode: String,
    longUrl: String
})

export const Url = mongoose.model("ShortURL",UrlSchema)