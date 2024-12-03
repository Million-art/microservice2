import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>, // Inject Product model here
  ) {}

  // Method to fetch all products
  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  // Method to create a new product
  async createProduct(
    name: string,
    image: string,
    price: number,
    likes: number,
  ): Promise<Product> {
    const createdProduct = new this.productModel({ name, image, price, likes });
    return createdProduct.save();
  }
}
