import mongoose,{ Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  description: {
    type: String,
    trim: true
  }
})

export const Course=mongoose.model("Course", courseSchema)
