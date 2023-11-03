import { ApiProperty } from '@nestjs/swagger';
import { SiEntity } from 'src/common/SiEntity.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item extends SiEntity{
    @ApiProperty({
        description: 'The name of the Item',
        default: 'Item 1',
        required: true,
    })
    @Column({
        length: 500,
        nullable: false,
    })
    name: string;

    @ApiProperty({
        description: 'The description of the Item',
        default: 'Item 1 description',
        required: true,
    })
    @Column({
        length: 500,
        nullable: true,
    })
    description: string;

    @ApiProperty({
        description: 'The price of the Item',
        default: 0,
        required: true,
    })
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
    })
    unit_price: number;

    @ApiProperty({
        description: 'The SKU of the Item',
        default: 'SKU-1',
        required: true,
    })
    @Column({
        length: 50,
        nullable: false,
        unique: true,
    })
    sku: string;
}
