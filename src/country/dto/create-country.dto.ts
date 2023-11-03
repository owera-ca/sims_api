import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCountryDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(2)
    iso2_code: string;

    @IsNotEmpty()
    @IsString()
    @Length(3)
    iso3_code: string;
}
