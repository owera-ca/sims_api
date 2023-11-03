import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    userId: number;

    @IsString()
    status: string;

    @IsString()
    note: string;
}
