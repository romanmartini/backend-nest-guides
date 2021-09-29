import { Module } from '@nestjs/common';

// Controllers
import { CoffeesController } from './coffees.controller';

// Services
import { CoffeesService } from './coffees.service';

@Module({
    controllers: [
        CoffeesController
    ],
    providers: [
        CoffeesService
    ]
})
export class CoffeesModule {}
