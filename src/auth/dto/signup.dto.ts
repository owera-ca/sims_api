import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The first name of the User',
    default: 'Bob',
    required: true,
  })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The last name of the User',
    default: 'Smith',
    required: true,
  })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'The email of the User',
    default: 'bob1@example.com',
    required: true,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The password of the User',
    default: 'password',
    required: true,
  })
  password: string;
}
