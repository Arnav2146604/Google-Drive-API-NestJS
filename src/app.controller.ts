import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/list")
  flist() {
    return this.appService.flist();
  }
  @Get("/upload")
  fupload(){
    return this.appService.fupload();
  }

  @Get("/search/:temp")
  fsearch(@Param() temp: string){
    return this.appService.fsearch(temp);
  }

  @Get("/download/:temp")
  fdownload(@Param() temp: string){
    return this.appService.fdownload(temp);
  }
}
