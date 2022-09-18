// strapi-api/config/database.js
module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'localhost2'),
            port: env.int('DATABASE_PORT', 5433),
            database: env('DATABASE_NAME', 'strapi'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', 'postgres1234'),
            schema: env('DATABASE_SCHEMA', 'public'), // Not required
            // ssl: {
            //     rejectUnauthorized: env.bool('DATABASE_SSL_SELF', true),
            // },
        },
        // debug: false,
    },
});

// module.exports = ({ env }) => ({
//     connection: {
//         client: 'postgres',
//         connection: {
//             host: env('DATABASE_HOST', 'localhost'),
//             port: env.int('DATABASE_PORT', 5433),
//             database: env('DATABASE_NAME', 'postgres'),
//             user: env('DATABASE_USERNAME', 'postgres'),
//             password: env('DATABASE_PASSWORD', 'postgres1234'),
//             schema: env('DATABASE_SCHEMA', 'public'), // Not required
//             ssl: {
//                 rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//             },
//         },
//         debug: false,
//     },
// });
// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });