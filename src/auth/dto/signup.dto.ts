import { IsString, IsEmail } from 'class-validator';

export class SignupDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
