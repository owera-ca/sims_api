import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Country } from '../../country/entities/country.entity';
import { SiEntity } from 'src/common/SiEntity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class State extends SiEntity {
    @ApiProperty({
        description: 'The name of the state',
        type: String,
        example: 'Jawa Barat',
    })
    @Column({
        length: 100,
        nullable: false,
        unique: true,
    })
    name: string;

    @ApiProperty({
        description: 'The code of the state',
        type: String,
        example: 'JB',
    })
    @Column({
        length: 5,
        nullable: false,
        unique: true,
    })
    code: string;

    @ManyToOne(() => Country, country => country.states)
    country: Country;
}
