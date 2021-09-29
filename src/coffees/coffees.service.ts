import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

// interfaces
import { Coffees } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
    coffees: Coffees[] = [
        {
            _id: '1',
            name: 'Shipwerck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate', 'vanilla']
        },
    ]

    findAll(): Coffees[]{
        return this.coffees;
    }

    findOne(id: string): Coffees{
        return this.coffees.find(item => item._id === id );
    }

    create(createCoffeeDto: CreateCoffeeDto){
        this.coffees.push(createCoffeeDto)
        return createCoffeeDto
    }

    update(id: string, updateCoffeeDto: UpdateCoffeeDto ){
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            // update the existing entity
        }
    }

    remove(id: string){
        const coffeeIndex  = this.coffees.findIndex(item => item._id === id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }

}

