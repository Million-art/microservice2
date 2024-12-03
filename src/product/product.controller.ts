// product.controller.ts
import { Body, Controller, Get, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { CreateProductDto } from './create-product.dto'; 

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async getAllProducts(): Promise<Product[]> {
    try {
      return await this.productService.getAllProducts();
    } catch (error) {
      throw new HttpException(
        `Unable to fetch products: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('create')
  async createProduct(
    @Body() createProductDto: CreateProductDto, // Use DTO
  ): Promise<Product> {
    try {
      const { name, image, price, likes } = createProductDto;
      return await this.productService.createProduct(name, image, price, likes);
    } catch (error) {
      throw new HttpException(
        `Unable to create product: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
