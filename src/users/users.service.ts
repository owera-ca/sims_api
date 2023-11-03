import { HttpException, Injectable } from '@nestjs/common'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import { SignupDto } from 'src/auth/dto/signup.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  async create(signupDto: SignupDto) {

    // check if user already exists
    const userExists = await this.findOneByEmail(signupDto.email)
    console.log('user exists', userExists)
    if (userExists) {
      throw new HttpException('User already exists', 400)
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(signupDto.password, 12);

    const user = new User();
    user.f_name = signupDto.firstName
    user.l_name = signupDto.lastName
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
