import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { skill } from './schema';

const main = async () => {
	const uri = `mysql://root:root@127.0.0.1:3306/taylorsphere`;
	console.log(uri);
	const connection = await mysql.createConnection({
		uri,
	});
	const db = drizzle(connection);
	const result = await db.insert(skill).values([
		{ value: 'nextjs', display: 'NextJs' },
		{ value: 'typescript', display: 'TypeScript' },
	]);
	connection.destroy();
};

main();

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
