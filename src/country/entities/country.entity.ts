import { ApiProperty } from '@nestjs/swagger';
import { SiEntity } from 'src/common/SiEntity.entity';
import { State } from 'src/state/entities/state.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('country')
export class Country extends SiEntity {
    @ApiProperty({
        description: 'The name of the country',
        type: String,
        example: 'Indonesia',
    })
    @Column({
        length: 100,
        nullable: false,
        unique: true,
    })
    name: string;

    @ApiProperty({
        description: 'The iso2 code of the country',
        type: String,
        example: 'ID',
    })
    @Column({
        length: 2,
        nullable: false,
        unique: true,
    })
    iso2_code: string;

    @ApiProperty({
        description: 'The iso3 code of the country',
        type: String,
        example: 'IDN',
    })
    @Column({
        length: 3,
        nullable: false,
        unique: true,
    })
    iso3_code: string;

    @OneToMany(() => State, state => state.country)
    states: State[];
}
