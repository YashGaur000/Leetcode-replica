import express from 'express';
import { questionController } from '../controllers/question-controller.js';
export const questionRoutes = express.Router();
questionRoutes.post('/submit-question', questionController.submitQuestion);
questionRoutes.get('/singlequestion/:questionid', questionController.singleQuestion);
questionRoutes.get('/questions', questionController.allQuestions);
questionRoutes.post('/add-question', questionController.addQuestion);
questionRoutes.put('/update-question', questionController.updateQuestion);
questionRoutes.delete('/remove-question', questionController.removeQuestion);