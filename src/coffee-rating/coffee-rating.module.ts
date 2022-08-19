import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from '../database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    /** Dynamic Module Injection */
    DatabaseModule.register({
      type: 'postgres',
      host: process.env.DATABASE_HOST, // database host
      port: +process.env.DATABASE_PORT, // database port
      username: process.env.DATABASE_USER, // username
      password: process.env.DATABASE_PASSWORD, // user password
    }),
    CoffeesModule,
  ],
  providers: [CoffeeRatingService, ConfigService],
})
export class CoffeeRatingModule {}
