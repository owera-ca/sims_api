import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { State } from 'src/state/entities/state.entity';
import { Country } from 'src/country/entities/country.entity';

@Injectable()
export class AddressService {
  constructor(@InjectRepository(Address) private addressRepository: Repository<Address>,
    @InjectRepository(Country) private countryRepository: Repository<Country>,
    @InjectRepository(State) private stateRepository: Repository<State>
  ) { }
  async create(createAddressDto: CreateAddressDto) {
    // fetch country by id
    const country = await this.countryRepository.findOneById(createAddressDto.countryId);

    // fetch state by id
    const state = await this.stateRepository.findOneById(createAddressDto.stateId);

    // create address
    const address = new Address();
    address.label = createAddressDto.label;
    address.isDefault = createAddressDto.isDefault ? createAddressDto.isDefault : false;
    address.address1 = createAddressDto.address1;
    address.address2 = createAddressDto.address2;
    address.city = createAddressDto.city;
    address.postalCode = createAddressDto.postalCode;
    address.state = state;
    address.country = country;
    address.phone = createAddressDto.phone;
    return this.addressRepository.save(address);
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
