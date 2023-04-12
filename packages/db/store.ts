import { InferModel } from 'drizzle-orm';
import { drizzle, type MySql2Database } from 'drizzle-orm/mysql2';

import mysql from 'mysql2/promise';
// import { something } from './schema';

// const main = async () => {
// 	const poolConnection = await mysql.createConnection({
// 		uri: 'mysql://root:root@127.0.0.1:3306/taylorsphere',
// 	});

// 	type NewSomething = InferModel<typeof something>;

// 	const db = drizzle(poolConnection);
// 	const result = await db.insert(something).values([{ value: 'test-one' }, { value: 'test-two' }]);
// 	console.log(result);
// 	poolConnection.destroy();
// };

// const read = async () => {
// 	const poolConnection = await mysql.createConnection({
// 		uri: 'mysql://root:root@127.0.0.1:3306/taylorsphere', // this will take the branch you are developing on, see README for details
// 	});

// 	type NewSomething = InferModel<typeof something>;

// 	const db = drizzle(poolConnection);
// 	const result = await db.select().from(something);
// 	console.log(result);

// 	poolConnection.destroy();
// };
