const Redis = require("ioredis");

const connectToRedis = async () => {
    const port = process.env.REDIS_PORT || 6379;
    const client = new Redis(port, 'redis'); // Use service name

  // Handle connection errors gracefully
    client.on('error', (err) => {
    console.error('Redis connection error:', err);
    });

    return client;
};

module.exports = connectToRedis;