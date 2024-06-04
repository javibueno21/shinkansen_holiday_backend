import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getCoffees(): string {
    return this.coffeesService.getCoffees();
  }

  @Get(':id')
  get1Cafesitonomas(@Param('id') id: string): string {
    const cafesitos = ['cafe solo', 'cafe con lexe', 'cafe bonbom'];
    return cafesitos[id];
  }

  @Post()
  crerate(@Body() body) {
    return body;
  }
}
