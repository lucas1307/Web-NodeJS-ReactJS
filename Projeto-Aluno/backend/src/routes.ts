import { Router, request, response, Request, Response} from 'express'
 
import { getTasks } from './controller/AlunosController';
import { saveTask } from './controller/AlunosController';
import { getTask } from './controller/AlunosController';
import { updateTask } from './controller/AlunosController';
import { deleteTask } from './controller/AlunosController';
import { finishedTask } from './controller/AlunosController';

 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
 
routes.get('/Alunos', getTasks)
routes.post('/Alunos', saveTask)
routes.get('/Alunos/:id', getTask)
routes.put('/Alunos/:id', updateTask)
routes.delete('/Alunos/:id', deleteTask)
routes.patch('/Alunos/:id', finishedTask)
 
export default routes

