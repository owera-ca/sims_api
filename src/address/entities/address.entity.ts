import { ApiProperty } from '@nestjs/swagger';
import { SiEntity } from 'src/common/SiEntity.entity';
import { Country } from 'src/country/entities/country.entity';
import { State } from 'src/state/entities/state.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('address')
export class Address extends SiEntity {
    @ApiProperty({
        description: 'The label of the address',
        type: String,
        example: 'Home',
    })
    @Column({
        length: 100,
        nullable: false,
    })
    label: string;

    @ApiProperty({
        description: 'Is default',
        type: Boolean,
        default: false,
    })
    @Column({ default: false })
    isDefault: boolean;

    @ApiProperty({
        description: 'address1',
        type: String,
        example: 'B-96, Sector 65',
    })
    @Column({
        nullable: false
    })
    address1: string;

    @ApiProperty({
        description: 'address2',
        type: String,
        example: 'Noida',
    })
    @Column({ nullable: true })
    address2: string;

    @ApiProperty({
        description: 'City',
        type: String,
        example: 'Noida',
    })
    @Column({
        nullable: false,
        length: 100
    })
    city: string;

    @ApiProperty({
        description: 'Postal code',
        type: String,
        example: '201301',
    })
    @Column({
        nullable: false,
        length: 10
    })
    postalCode: string;

    @ApiProperty({
        description: 'State id',
        type: Number,
        example: 1,
    })
    @ManyToOne(() => State)
    state: State;

    @ApiProperty({
        description: 'Country id',
        type: Number,
        example: 1,
    })
    @ManyToOne(() => Country)
    country: Country;

    @ApiProperty({
        description: 'Phone number for the address',
        type: String,
        example: '9999999999',
    })
    @Column({
        nullable: true,
        length: 15
    })
    phone: string;

    @ApiProperty({
        description: 'User id',
        type: Number,
        example: 1,
    })
    @ManyToOne(() => User)
    user: User;
}
