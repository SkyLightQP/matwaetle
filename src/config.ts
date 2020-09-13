import dotenv from 'dotenv';

dotenv.config();

const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  IS_LOGGING_MESSAGE: (process.env.IS_LOGGING_MESSAGE || 'FALSE').toUpperCase() === 'TRUE'
};

export default config;
