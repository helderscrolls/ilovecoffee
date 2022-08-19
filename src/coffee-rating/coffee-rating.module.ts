import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from '../database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    /** Dynamic Module Injection */
    // DatabaseModule.register({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    // }),
    CoffeesModule,
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
