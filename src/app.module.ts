import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { OrdersModule } from './orders/orders.module';
import { ItemsModule } from './items/items.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { AddressModule } from './address/address.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "redhat",
      database: "simswear",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging: true
    }),
    AuthModule,
    UsersModule,
    OrdersModule,
    ItemsModule,
    OrderItemsModule,
    AddressModule,
    CountryModule,
    StateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
