import mongoose,{ Schema } from "mongoose";

const semesterSchema = new Schema({
    number: {
        type: Number,
        required: true
      },
      courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      }]
})

export const Semester=mongoose.model("Semester", semesterSchema)
