// // lib/redis.ts
// import { createClient } from 'redis';

// const redisClient = createClient({
//   url: process.env.REDIS_URL, // Use local or remote Redis URL
// });

// redisClient.on('error', (err) => console.error('Redis Client Error', err));

// export async function connectRedis() {
//   if (!redisClient.isOpen) {
//     await redisClient.connect();
//   }
// }

// export default redisClient;
