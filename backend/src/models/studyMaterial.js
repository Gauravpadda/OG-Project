import mongoose,{ Schema } from "mongoose";

const studyMaterialSchema = new Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
      },
    title: {
        type: String,
        required: true,
        trim: true
      },
    fileUrl: {
        type: String,
        required: true,
        trim: true
      }
})

export const StudyMaterial=mongoose.model("StudyMaterial", studyMaterialSchema)
