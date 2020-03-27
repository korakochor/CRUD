
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/koradata'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/koradata'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
