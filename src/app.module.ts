import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { CoffeesModule } from './coffees/coffees.module';

// 

@Module({
  imports: [
    CoffeesModule,
    MongooseModule.forRoot('mongodb+srv://coffeesdb:1234@coffees.geelh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
