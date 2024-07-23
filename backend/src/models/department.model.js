import mongoose,{ Schema } from "mongoose";

const departmantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true
      }
})

export const Department=mongoose.model("Department", departmantSchema)
