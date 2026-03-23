import { Module } from "@nestjs/common";
import { PaymentsModule } from "./payments/payments.module";
import { TRPCModule } from "nestjs-trpc";
import { PaymentsRouter } from "./payments/payments.router";

@Module({
  imports: [PaymentsModule, TRPCModule.forRoot({})],
  controllers: [],
  providers: [PaymentsRouter],
})
export class AppModule {}
