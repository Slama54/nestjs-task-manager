/* eslint-disable prettier/prettier */

import { IsEnum, IsOptional, Length } from "class-validator";


export class UpdateTaskDto {
    @IsOptional()
    @Length(2,15)
    title?: string;
  
    @IsOptional()
    @Length(10,200)
    description?: string;
  
    @IsEnum(['pending', 'in-progress', 'completed'])
    @IsOptional()
    status?: 'pending' | 'in-progress' | 'completed';
}
