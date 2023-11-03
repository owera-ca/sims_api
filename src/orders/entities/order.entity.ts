import { ApiProperty } from '@nestjs/swagger';
import { SiEntity } from 'src/common/SiEntity.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Order extends SiEntity {
    @ApiProperty({
        description: 'User id',
        default: 'Order 1',
        required: true,
    })
    @ManyToOne(() => User)
    user: User;

    @ApiProperty({
        description: 'Status of the Order',
        default: 'pending',
        required: false,
    })
    @Column()
    status: string;

    @ApiProperty({
        description: 'Note of the Order',
        default: null,
        required: false,
    })
    @Column()
    note: string;
}
