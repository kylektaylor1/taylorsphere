export type { AppRouter } from './src/router';
export { appRouter } from './src/router';

export { createContext } from './src/context';
export type { Context } from './src/context';
import { createNextApiHandler as customNextApiHandler } from '@trpc/server/adapters/next';
export { customNextApiHandler };
