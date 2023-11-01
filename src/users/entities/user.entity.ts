import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {
    @ApiProperty({
        description: 'The id of the user',
        type: Number,
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'The first name of the user',
        type: String,
        example: 'Bob',
    })
    @Column()
    f_name: string;

    @ApiProperty({
        description: 'The last name of the user',
        type: String,
        example: 'Smith',
    })
    @Column()
    l_name: string;

    @ApiProperty({
        description: 'The email of the user',
        type: String,
        example: 'bob@example.com',
    })
    @Column()
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        type: String,
        example: 'password',
    })
    @Column()
    password: string;
}
