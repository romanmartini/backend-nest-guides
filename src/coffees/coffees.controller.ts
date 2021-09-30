import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffees.entity';

@Controller('coffees')
export class CoffeesController {

    constructor(
        private readonly coffeesService: CoffeesService 
    ){}

    @Get()
    findAll(@Query() paginationQuery): Coffee[]{
        const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        throw 'A random error'
        const coffee =  this.coffeesService.findOne(id);
        if (!coffee) {
            // throw new HttpException(`coffe #${id} not found`, HttpStatus.NOT_FOUND )
            throw new NotFoundException(`coffe #${id} not found`)
        }
        return coffee;
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    upadte(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id , updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id)
    }
    

    

}
