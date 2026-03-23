import { Input, Mutation, Query, Router } from "nestjs-trpc";
import { ItemsService } from "./items.service";
import { z } from "zod";

const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  paymentId: z.string(),
});

const createItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  paymentId: z.string(),
});

@Router({ alias: "items" })
export class ItemsRouter {
  constructor(private readonly itemsService: ItemsService) {}

  @Mutation({
    input: createItemSchema,
    output: itemSchema,
  })
  createItem(@Input() request: z.infer<typeof createItemSchema>) {
    return this.itemsService.createItem(request);
  }

  @Query({
    input: z.object({ id: z.string() }),
    output: itemSchema,
  })
  getItem(@Input("id") id: string) {
    return this.itemsService.getItemById(id);
  }

  @Query({
    output: z.array(itemSchema),
  })
  listItems() {
    return this.itemsService.getItems();
  }

  @Mutation({
    input: z.object({ id: z.string(), ...createItemSchema.shape }),
    output: itemSchema,
  })
  updateItem(
    @Input("id") id: string,
    @Input() request: z.infer<typeof createItemSchema>,
  ) {
    return this.itemsService.updateItem(id, request);
  }

  @Mutation({
    input: z.object({ id: z.string() }),
  })
  deleteItem(@Input("id") id: string) {
    return this.itemsService.deleteItem(id);
  }
}
