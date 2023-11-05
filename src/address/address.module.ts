import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { State } from 'src/state/entities/state.entity';
import { Country } from 'src/country/entities/country.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country, State, Address, User])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
