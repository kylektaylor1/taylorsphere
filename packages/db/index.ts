import { drizzle, type MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

export * from './schema';
export type { MySql2Database };

const poolConnection = mysql.createPool({
	uri: process.env.MYSQL_DB_URL, // this will take the branch you are developing on, see README for details
});
export const db = drizzle(poolConnection);

// const serverlessConnection = connect({
// 	url: process.env.MYSQL_DB_URL,
// });

// export const serverlessDb = serverlessDrizzle(serverlessConnection);
