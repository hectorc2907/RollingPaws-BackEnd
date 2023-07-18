import { Schema, model } from "mongoose";

const profesionalesSchema = new Schema({
  professionalName: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  professionalLastName: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  professionalProfession: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  professionalImage: {
    type: String,
    required: true,
  },
});

const Professional = model("professional", profesionalesSchema);

export default Professional;