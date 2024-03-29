import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './utils/decorator/public.decorator';
import { GetCurrentUserById } from './utils/guard/get-user-by-id.decorator';
import { JwtAuthGuard } from './utils/guard/jwt-auth.guard';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Public()
  @Get()
  getHello(@GetCurrentUserById() id: number): string {
    console.log(id);
    return this.appService.getHello();
  }
  @UseGuards(JwtAuthGuard)
  @Get('/auth')
  getHelloAuth(@GetCurrentUserById() id: number): string {
    console.log(id);
    return this.appService.getHello();
  }
}
