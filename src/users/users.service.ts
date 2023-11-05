import { HttpException, Injectable } from '@nestjs/common'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import { SignupDto } from 'src/auth/dto/signup.dto'
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from './dto/create-user.dto'
import { Address } from 'src/address/entities/address.entity'
import * as _ from "lodash"

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Address) private readonly addressesRepository: Repository<Address> 
  ) {}
  async create(createUserDto: CreateUserDto) {

    // check if user already exists
    const userExists = await this.findOneByEmail(createUserDto.email)
    console.log('user exists', userExists)
    if (userExists) {
      throw new HttpException('User already exists', 400)
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(createUserDto.password, 12);

    // address from signupDto
    const address = await this.addressesRepository.findOneById(+createUserDto.defaultAddressId);

    const user = new User();
    user.fName = createUserDto.fName
    user.lName = createUserDto.lName
    user.email = createUserDto.email
    user.password = hashedPassword
    user.defaultAddress = address

    return this.usersRepository.save(user)
  }

  async signup(signupDto: SignupDto) {
    // check if user already exists
    const userExists = await this.findOneByEmail(signupDto.email)
    console.log('user exists', userExists)
    if (userExists) {
      throw new HttpException('User already exists', 400)
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(signupDto.password, 12);

    const user = new User();
    user.fName = signupDto.firstName
    user.lName = signupDto.lastName
    user.email = signupDto.email
    user.password = hashedPassword

    return this.usersRepository.save(user)
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneById(id);
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOne({
      where: {
        email
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneById(id);
    if (!user) {
      throw new HttpException('User not found', 400)
    }

    user.fName = updateUserDto.fName
    user.lName = updateUserDto.lName
    user.email = updateUserDto.email
    user.phone = updateUserDto.phone

    // update password
    if(_.hasIn(updateUserDto, 'password' && updateUserDto.password)) {
      const hashedPassword = bcrypt.hashSync(updateUserDto.password, 12);
      user.password = hashedPassword
    }

    // address from signupDto
    const address = await this.addressesRepository.findOneById(+updateUserDto.defaultAddressId);
    user.defaultAddress = address

    return this.usersRepository.save(user)
  }

  async changePassword(id: number, password: string) {
    const user = await this.usersRepository.findOneById(id);
    if (!user) {
      throw new HttpException('User not found', 400)
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(password, 12);
    user.password = hashedPassword

    return this.usersRepository.save(user)
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
