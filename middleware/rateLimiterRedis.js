const redis = require('redis');
const { RateLimiterRedis } = require('rate-limiter-flexible');
require('dotenv').config();
const redisClient = redis.createClient({
    host: 'redis',
    port: process.env.REDIS_PORT,
    enable_offline_queue: false,
});

const rateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'middleware',
    points: 10, // 10 requests
    duration: 5, // per 5 second by IP
    blockDuration: 60
});

const rateLimiterMiddleware = (req, res, next) => {
    rateLimiter.consume(req.ip)
        .then(() => {
            next();
        })
        .catch(() => {
            res.status(429).send('Too Many Requests');
        });
};

module.exports = rateLimiterMiddleware;