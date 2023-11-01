import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Timestamp } from 'typeorm';

@Entity()
export class SiEntity {
    @ApiProperty({
        description: 'The id of the entity',
        type: Number,
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Is deleted',
        type: Boolean,
        default: false,
    })
    @Column({ default: false })
    is_deleted: boolean;

    @ApiProperty({
        description: 'Created at',
        type: Timestamp,
        example: new Date(),
    })
    @CreateDateColumn()
    created_at: Date;

    @ApiProperty({
        description: 'Created by',
        type: String,
        example: 'admin',
    })
    @Column({ default: 'SYSTEM'})
    created_by: string;

    @ApiProperty({
        description: 'Updated at',
        type: Timestamp,
        example: new Date(),
    })
    @UpdateDateColumn()
    updated_at: Date;

    @ApiProperty({
        description: 'Updated by',
        type: String,
        example: 'admin',
    })
    @Column({ default: null})
    updated_by: string;

    @ApiProperty({
        description: 'Deleted at',
        type: Timestamp,
        example: new Date(),
    })
    @DeleteDateColumn()
    deleted_at: Date;

    @ApiProperty({
        description: 'Deleted by',
        type: String,
        example: 'admin',
    })
    @Column({ default: null})
    deleted_by: string;
}
