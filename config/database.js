module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connection: {
        client: 'postgres',
        connection: {
            // setting localhost2 doesnt cause any issues f 
            host: env('DATABASE_HOST', 'localhost2'),
            port: env.int('DATABASE_PORT', 5433),
            database: env('DATABASE_NAME', 'strapi'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', '1234'),
            schema: env('DATABASE_SCHEMA', 'public'), // Not required
            ssl: false,
            // ssl: {
            //     rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
            // },
        },
        // debug: false,
    },
});