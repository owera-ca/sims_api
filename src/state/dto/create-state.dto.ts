import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    code: string;

    @IsNotEmpty()
    @IsString()
    countryId: number;
}
