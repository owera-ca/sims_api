import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
    @IsString()
    stateId: string;

    @IsNotEmpty()
    @IsString()
    countryId: string;

    @IsNotEmpty()
    @IsString()
    phone: string;
}
