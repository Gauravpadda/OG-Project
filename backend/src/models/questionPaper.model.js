import mongoose,{ Schema } from "mongoose";

const questionPaperSchema = new Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
      },
      year: {
        type: Number,
        required: true
      },
      fileUrl: {
        type: String,
        required: true,
        trim: true
      }
})

export const QuestionPaper=mongoose.model("QuestionPaper", questionPaperSchema)
