import { router } from '../trpc';
import { skillRouter } from './skill';
import { authRouter } from './auth';

export const appRouter = router({
	skill: skillRouter,
	auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
