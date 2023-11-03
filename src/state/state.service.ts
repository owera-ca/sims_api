import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from './entities/state.entity';
import { Repository } from 'typeorm';
import { Country } from 'src/country/entities/country.entity';

@Injectable()
export class StateService {
  constructor(@InjectRepository(State) private stateRepository: Repository<State>,
  @InjectRepository(Country) private countryRepository: Repository<Country>
  ) { }
  async create(createStateDto: CreateStateDto) {
    console.log(createStateDto)

    // get country by id
    const country = await this.countryRepository.findOneById(createStateDto.countryId);
    console.log('country', country)

    const state = new State();
    state.name = createStateDto.name;
    state.code = createStateDto.code;
    state.country = country;
    return this.stateRepository.save(state);
  }

  findAll() {
    return `This action returns all state`;
  }

  findOne(id: number) {
    return `This action returns a #${id} state`;
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  remove(id: number) {
    return `This action removes a #${id} state`;
  }
}
