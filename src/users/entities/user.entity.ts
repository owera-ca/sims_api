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
        description: 'The flag of the user',
        type: Boolean,
        example: false,
    })
    @Column({
        default: 0
    })
    flags: number;
}
