import { Injectable, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Controllers
import { CoffeesController } from './coffees.controller';

// Services
import { CoffeesService } from './coffees.service';

// Schemma
import { Coffee, CoffeeSchema } from './entities/coffees.entity';
import { Event, EventSchema } from 'src/events/entities/event.entity';

// 
import { COFFE_BRAND } from './coffees.constants';
import { Connection } from 'mongoose';

class ConfigService {}
// class DeveloptmentConfigService {}
// class ProductionConfigService {}

// @Injectable()
// export class CoffeeBrandsFactory {
//     create() {
//         return ['buddy brew', 'nescafe']
//     }
// }

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Coffee.name,
                 schema: CoffeeSchema,
            },
            {
                name: Event.name,
                schema: EventSchema
            }
        ]),
    ],
    controllers: [
        CoffeesController
    ],
    providers: [
        CoffeesService,
        // CoffeeBrandsFactory,
        
        // {
        //     provide: CoffeesService,
        //     useClass: CoffeesService,
        // },

        // {
        //     provide: CoffeesService,
        //     useValue: new MockCoffeesServices()
        // },  

        // {
        //     provide: COFFE_BRAND,
        //     useValue: ['buddy new', 'nescafe']
        // },

        // {
        //     provide: COFFE_BRAND,
        //     useFactory: (brandsFactory: CoffeeBrandsFactory) => brandsFactory.create(),
        //     inject: [CoffeeBrandsFactory]
        // },

        {

            provide: COFFE_BRAND,
            useFactory: async (connection: Connection): Promise<String[]> => {
                const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
                return coffeeBrands;
            },
            inject: [Connection]

        },
        // {
        //     provide: ConfigService,
        //     useClass: process.env.NODE_ENV === 'development' ? DeveloptmentConfigService : ProductionConfigService,
        // }
    ],
    exports: [
        CoffeesService
    ]
})
export class CoffeesModule {}
