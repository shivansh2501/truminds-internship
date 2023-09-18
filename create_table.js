const { Client } = require('pg');

const client = new Client({
    host: '127.0.0.1',
    user: 'postgres',
    database: 'dvdrental',
    password: 'postgres',
    port: 5432,
});

const newTableFromQuery = async () => {
	const query = `    
            CREATE TABLE "test" (
                first_name varchar,
                last_name varchar,
                email_id varchar
            )
    `;
    await client.connect();  // creates connection
    try {
        await client.query(query);  // sends query
    } finally {
        await client.end();  // closes connection
    }
};

newTableFromQuery()
    .then(() => console.table('New table created!'))
    .catch(error => console.error(error.stack));