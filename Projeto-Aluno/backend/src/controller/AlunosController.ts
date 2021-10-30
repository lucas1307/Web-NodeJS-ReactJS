import { getRepository } from "typeorm";
import { Alunos } from '../entity/Alunos';
import { Request, Response } from "express";
 
export const getTasks = async(request: Request, response: Response) => {
    const tasks = await getRepository(Alunos).find()
    return response.json(tasks);
};
 
export const saveTask = async(request: Request, response: Response) => {
    const task = await getRepository(Alunos).save(request.body)
    return response.json(task);
};
 
export const getTask = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Alunos).findOne(id)
    return response.json(task);
};
 
export const updateTask = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Alunos).update(id, request.body)
 
    if (task.affected == 0){
        const taskUpdated = await getRepository(Alunos).findOne(id)
        return response.json(taskUpdated);
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};
 
export const deleteTask = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Alunos).delete(id)
 
    if (task.affected == 1){
        return response.status(200).json( {message: "Tarefa excluída com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};
export const finishedTask = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Alunos).update(id, {
        Matriculado: true,
    })
 
    if (task.affected == 0){
        const taskFinished = await getRepository(Alunos).findOne(id)
        return response.json(taskFinished);
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};

