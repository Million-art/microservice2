import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'products' }) // Specifies the MongoDB collection name
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop({ type: Number, required: true }) // Specify the type explicitly
  price: number;

  @Prop({ type: Number, default: 0 }) // Default value for likes
  likes: number;
}

// Export the schema
export const ProductSchema = SchemaFactory.createForClass(Product);
