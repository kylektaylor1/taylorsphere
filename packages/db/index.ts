import { InferModel } from 'drizzle-orm';
import { drizzle, type MySql2Database } from 'drizzle-orm/mysql2';

import mysql from 'mysql2/promise';
import { skill } from './schema';

export * from './schema';
export type { MySql2Database };

const poolConnection = await mysql.createConnection({
	uri: process.env.MYSQL_DB_URL, // this will take the branch you are developing on, see README for details
});

export const db = drizzle(poolConnection);
