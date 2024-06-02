import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  getCoffees(): string {
    return 'A lot of fkin coffe mate';
  }
}
