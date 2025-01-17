const { Client } = require('pg');

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD } = process.env;

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(50),
    text VARCHAR(300),
    created_at TIMESTAMP DEFAULT NOW()
  );

  INSERT INTO messages (username, text)
  VALUES 
    ('Admin', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec leo orci. Integer pellentesque commodo nisi. Pellentesque lacinia urna vitae nulla egestas, et tristique leo molestie. Vestibulum sodales feugiat turpis, a lobortis enim consectetur sit amet. Vivamus ullamcorper ultricies finibus.');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    host: PGHOST,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    port: 5432,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
