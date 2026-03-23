import { Module } from "@nestjs/common";
import { PaymentsModule } from "./payments/payments.module";
import { router, paymentsRouter } from "@repo/trpc";

const appRouter = router({
  payments: paymentsRouter,
});

export type AppRouter = typeof appRouter;

@Module({
  imports: [PaymentsModule],
  controllers: [],
  providers: [
    {
      provide: "APP_ROUTER",
      useValue: appRouter,
    },
  ],
})
export class AppModule {}
