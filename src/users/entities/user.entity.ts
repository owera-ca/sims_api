import { ApiProperty } from "@nestjs/swagger";
import { Address } from "src/address/entities/address.entity";
import { SiEntity } from "src/common/SiEntity.entity";
import { Entity, Column, ManyToOne } from "typeorm";

@Entity('user')
export class User extends SiEntity {
    @ApiProperty({
        description: 'The first name of the user',
        type: String,
        example: 'Bob',
    })
    @Column({
        nullable: false
    })
    fName: string;

    @ApiProperty({
        description: 'The last name of the user',
        type: String,
        example: 'Smith',
    })
    @Column({
        nullable: false
    })
    lName: string;

    @ApiProperty({
        description: 'The email of the user',
        type: String,
        example: 'bob@example.com',
    })
    @Column({
        nullable: false
    })
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        type: String,
        example: 'password',
    })
    @Column({
        nullable: false
    })
    password: string;

    @ApiProperty({
        description: 'The phone number of the user',
        type: String,
        example: '1234567890',
    })
    @Column({
        nullable: true
    })
    phone: string;

    @ApiProperty({
        description: 'The flag of the user',
        type: Boolean,
        example: false,
    })
    @Column({
        default: 0
    })
    flags: number;

    @ApiProperty({
        description: 'The default address ID of the user',
        type: Number,
        example: 1,
    })
    @ManyToOne(() => Address)
    defaultAddress: Address;
}
