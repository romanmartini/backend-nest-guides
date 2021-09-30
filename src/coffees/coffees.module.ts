import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Controllers
import { CoffeesController } from './coffees.controller';

// Services
import { CoffeesService } from './coffees.service';

// Schemma
import { Coffee, CoffeeSchema } from './entities/coffees.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Coffee.name,
                schema: CoffeeSchema,
            },
        ]),
    ],
    controllers: [
        CoffeesController
    ],
    providers: [
        CoffeesService
    ]
})
export class CoffeesModule {}
