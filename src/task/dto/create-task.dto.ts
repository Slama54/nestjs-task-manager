/* eslint-disable prettier/prettier */
import { IsEnum, IsOptional, IsString, Length } from "class-validator";


export class CreateTaskDto {

    @IsString()
    @Length(2,15)
    title: string;
    
    @IsString()
    @Length(10,200)
    description: string;


    @IsEnum(['pending', 'in-progress', 'completed'])
    @IsOptional() 
    status?: 'pending' | 'in-progress' | 'completed';
}
