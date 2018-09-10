const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://wright:password@localhost/stackoverflow-lite';

const client = new pg.Client(connectionString);
client.connect();

let query = client.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, user_name VARCHAR(50), password VARCHAR(50), gender VARCHAR(10))');

query.on('end', ()=>{
   client.end();
});