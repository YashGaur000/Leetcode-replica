import { QuestionModel } from "../models/question-schema.js";
import childProcess from 'child_process';
import fs from 'fs';
export const questionController = {
    submitQuestion(request, response){
        const data= request.body;
        const sourceCode = data.code;
        // Code Save Server Disk
        const sourceCodePath = '/Users/amitsrivastava/Documents/online-code-platform/backend/source-codes';
        const sourceFilePath = sourceCodePath+"/Solution.java";
        fs.writeFileSync(sourceFilePath,sourceCode);
        const buffer = childProcess.execSync(`javac ${sourceFilePath}`);
        console.log('Buffer is ', buffer);
        if(buffer.toString().length==0){
            const buffer2 = childProcess.execSync(`cd ${sourceCodePath} 
            java Solution`);
            response.json({message:buffer2.toString()});
        }
        else{
            response.json({message:'Compilation fails', err: buffer.toString()});
        }
    },
    async singleQuestion(request, response){
        const questionId = request.params.questionid;
        const doc = await QuestionModel.findOne({_id:questionId}).exec();
        console.log('Doc is ', doc);
        response.json({question:doc});
    },
    async addQuestion(request, response){
        //console.log('Data Rec ', request.body);
        const questionObject = request.body;
        try{
        const doc = await QuestionModel.create(questionObject);
        response.json({message:'Question Added', 'record':doc});
        }
        catch(err){
            console.log('Error During Question Add ', err);
            response.json({message:'Error During Add Question'});
        }
    },
    updateQuestion(request, response){
        //response.setHeader('Access-Control-Allow-Origin', '*');
        response.json({message:'Question Updated'});
    },
    removeQuestion(request, response){
        response.json({message:'Question Removed'});
    },
    async allQuestions(request, response){
        try{
        const docs = await QuestionModel.find({}).exec();
        response.json({message:'All Records ', records: docs});
        }
        catch(err){
            console.log('Error in Questions ', err);
            response.json({message:'Error in Questions '});
        }
        
    }
}