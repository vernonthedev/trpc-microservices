import { router, publicProcedure } from "../../index.js";
import { z } from "zod";

export const paymentsRouter = router({
  create: publicProcedure
    .input(
      z.object({
        amount: z.number(),
        currency: z.string(),
      }),
    )
    .mutation(({ input }) => {
      return {
        id: Math.random().toString(36).substring(2, 15),
        amount: input.amount,
        currency: input.currency,
      };
    }),

  list: publicProcedure.query(() => {
    return [
      { id: "pay_1", amount: 100, currency: "USD" },
      { id: "pay_2", amount: 200, currency: "EUR" },
    ];
  }),
});
