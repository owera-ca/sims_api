import { ApiProperty } from "@nestjs/swagger";
import { SiEntity } from "src/common/SiEntity.entity";
import { Entity, Column } from "typeorm";

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
    f_name: string;

    @ApiProperty({
        description: 'The last name of the user',
        type: String,
        example: 'Smith',
    })
    @Column({
        nullable: false
    })
    l_name: string;

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
        description: 'The address of the user',
        type: String,
        example: '123 Main St',
    })
    @Column({
        nullable: true
    })
    address: string;

    @ApiProperty({
        description: 'The city of the user',
        type: String,
        example: 'Anytown',
    })
    @Column({
        nullable: true
    })
    city: string;

    @ApiProperty({
        description: 'The state of the user',
        type: String,
        example: 'CA',
    })
    @Column({
        nullable: true
    })
    state: string;

    @ApiProperty({
        description: 'The zip code of the user',
        type: String,
        example: '12345',
    })
    @Column({
        nullable: true
    })
    zip: string;

    @ApiProperty({
        description: 'The country of the user',
        type: String,
        example: 'USA',
    })
    @Column({
        nullable: true
    })
    country: string;

    @ApiProperty({
        description: 'The flag of the user',
        type: Boolean,
        example: false,
    })
    @Column({
        default: 0
    })
    flags: number;
}
