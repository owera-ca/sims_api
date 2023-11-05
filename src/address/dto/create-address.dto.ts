import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
    @IsNotEmpty()
    @IsString()
    label: string;

    @IsOptional()
    @IsBoolean()
    isDefault: boolean;

    @IsNotEmpty()
    @IsString()
    address1: string;

    @IsOptional()
    @IsString()
    address2: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    postalCode: string;

    @IsNotEmpty()
    @IsNumber()
    stateId: number;

    @IsNotEmpty()
    @IsNumber()
    countryId: number;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}
