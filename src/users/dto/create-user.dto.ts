import { IsString, IsEmail, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    fName: string;

    @IsString()
    @IsNotEmpty()
    lName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsOptional()
    phone: string;

    @IsNumber()
    @IsOptional()
    defaultAddressId: Number;
}
