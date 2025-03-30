// import { ConfigUtils } from '@amigoapp/amigo-api';

// ConfigUtils.load();

const config = () => ({
    port: parseInt(process.env.PORT ?? '3000', 10),
    environment: process.env.NODE_ENV || 'development',
    database: {
        name: process.env.DB_NAME,
        logging: process.env.DB_LOGGING === 'true',
        // pool: {
        //     max: parseInt(process.env.DB_CONNECTION ?? '5', 10),
        //     min: parseInt(process.env.DB_CONNECTION_MIN ?? '1', 10),
        // },
        write: {
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT ?? '5432', 10),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        read: {
            host: process.env.DB_REPLICA_HOST || process.env.DB_HOST,
            port: parseInt(process.env.DB_REPLICA_PORT ?? process.env.DB_PORT ?? '5432', 10),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
    },
});

export default config;
