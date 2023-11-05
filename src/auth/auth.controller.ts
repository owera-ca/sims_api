import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() loginDto: LoginDto, @Request() req) {
    return this.authService.signIn(loginDto.username, loginDto.password, req);
  }

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signUp(@Body() signupDto: SignupDto) {
    return this.authService.signUp(signupDto);
  }

  @Get('profile')
  getProfile(@Request() req) {
    console.log('inside getProfile', req.session)
    if (req.session.user) {
      return req.session.user
    }
    throw new HttpException('Not logged in', 401)
  }

  @Get('logout')
  logout(@Request() req) {
    req.session.destroy()
    return 'logged out'
  }
}
