module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : 'tylerburkhardt',
      password: 'pirate19!',
      database : 'productiveaf',
      debug: true,
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
  }
};
