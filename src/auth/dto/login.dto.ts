import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description: 'The username of the User',
        default: '',
        required: true,
    })
    username: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The password of the User',
        default: 'password',
        required: true,
    })
    password: string;
}

