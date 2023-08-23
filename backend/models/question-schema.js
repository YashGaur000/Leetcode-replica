import { SchemaTypes } from "mongoose";
import mongoose from "../utils/db/connection.js";
const Schema = mongoose.Schema;
const questionSchema = new Schema({
    "name":{type:SchemaTypes.String, required:true, unique:true},
    "desc":{type:SchemaTypes.String, required:true},
    "skeletoncode":{type:SchemaTypes.String, required:true},
    "testcases":{type:SchemaTypes.String, required:true}
});
export const QuestionModel = mongoose.model('questions',questionSchema);