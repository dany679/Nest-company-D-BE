import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // @IsNumber()
  // id: number;
  @IsString()
  @IsOptional()
  refreshToken: string;
}
