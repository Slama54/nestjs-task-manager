/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private TaskRepo: Repository<Task>){}
  async create(createTaskDto: CreateTaskDto):Promise<Task> {
    const task = await this.TaskRepo.create(createTaskDto)
    return this.TaskRepo.save(task);
  }

  async findAll() {
    return await this.TaskRepo.find();
  }

  async findOne(id: string) {
    const task = await this.TaskRepo.findOne({
      where:{id}
    })
    if (!task) {
      throw new NotFoundException("Task not found")
    }
    return task;

  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await this.TaskRepo.update({id}, updateTaskDto);
  }

  async remove(id: string) {
    return await this.TaskRepo.delete({id});
  }
}
