// create-product.dto.ts
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  likes?: number;
}
