import { router, publicProcedure, protectedProcedure } from '../trpc';
import { z } from 'zod';
import { skill } from 'db';

export const skillRouter = router({
	all: publicProcedure.query(({ ctx }) => {
		return ctx.db.select().from(skill);
	}),
	// byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
	// 	return ctx.db.something.findFirst({ where: { id: input } });
	// }),
	// create: protectedProcedure
	// 	.input(z.object({ title: z.string(), content: z.string() }))
	// 	.mutation(({ ctx, input }) => {
	// 		return ctx.db.something.create({ data: input });
	// 	}),
});
