import { Injectable, NotFoundException } from "@nestjs/common";
import { Item } from "./item.interface";
import { CreateItemRequest } from "./dto/create-item.request";

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];

  async createItem(request: CreateItemRequest): Promise<Item> {
    const newItem: Item = {
      ...request,
      id: Math.random().toString(36).substring(2, 15),
    };
    this.items.push(newItem);
    return Promise.resolve(newItem);
  }

  getItemById(id: string): Item {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      throw new NotFoundException("Item not found.");
    }
    return item;
  }

  getItems(): Item[] {
    return this.items;
  }

  updateItem(id: string, request: CreateItemRequest): Item {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new NotFoundException("Item not found.");
    }
    const updatedItem: Item = {
      ...request,
      id,
    };
    this.items[itemIndex] = updatedItem;
    return updatedItem;
  }

  deleteItem(id: string): void {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new NotFoundException("Item not found.");
    }
    this.items.splice(itemIndex, 1);
  }
}
