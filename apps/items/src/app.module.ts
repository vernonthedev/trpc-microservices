import { Module } from "@nestjs/common";
import { ItemsModule } from "./items/items.module";
import { TRPCModule } from "nestjs-trpc";
import { ItemsRouter } from "./items/items.router";

@Module({
  imports: [ItemsModule, TRPCModule.forRoot({})],
  controllers: [],
  providers: [ItemsRouter],
})
export class AppModule {}
