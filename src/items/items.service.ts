import { HttpException, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(@InjectRepository(Item) private readonly itemsRepository: Repository<Item>) {}
  async create(createItemDto: CreateItemDto) {

    // check if item with same sku already exists
    const itemExists = await this.itemsRepository.findOne({
      where: {
        sku: createItemDto.sku
      },
    });
    console.log('item exists', itemExists)
    if (itemExists) {
      throw new HttpException(`Item already exists with sku ${createItemDto.sku}`, 400)
    }

    const item = new Item();
    item.name = createItemDto.name;
    item.description = createItemDto.description;
    item.unit_price = createItemDto.unitPrice;
    item.sku = createItemDto.sku;
    return this.itemsRepository.save(item);
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
