import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ItemsService } from "./items.service";
import { CreateItemRequest } from "./dto/create-item.request";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  createItem(@Body() request: CreateItemRequest) {
    return this.itemsService.createItem(request);
  }

  @Get(":id")
  getItem(@Param("id") id: string) {
    return this.itemsService.getItemById(id);
  }

  @Get()
  listItems() {
    return this.itemsService.getItems();
  }

  @Put(":id")
  updateItem(@Param("id") id: string, @Body() request: CreateItemRequest) {
    return this.itemsService.updateItem(id, request);
  }

  @Delete(":id")
  deleteItem(@Param("id") id: string) {
    return this.itemsService.deleteItem(id);
  }
}
