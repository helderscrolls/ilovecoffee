import { CoffeeRefactor1660812786266 } from './src/migrations/1660812786266-CoffeeRefactor';
import { DataSource } from 'typeorm';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1660813614167 } from './src/migrations/1660813614167-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1660812786266, SchemaSync1660813614167],
});
