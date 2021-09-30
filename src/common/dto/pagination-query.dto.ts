// import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
      // @Type(() => Number)  // no es necesario cuando implementa  //->  enableImplicitConversion: true
    limit: number;

    @IsOptional()
    @IsPositive()
    // @Type(() => Number)
    offset: number;
}
