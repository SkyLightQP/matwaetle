import dotenv from 'dotenv';

dotenv.config();

const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  IS_LOGGING_MESSAGE: (process.env.IS_LOGGING_MESSAGE || 'FALSE').toUpperCase() === 'TRUE',
  CHANNEL_ID: process.env.CHANNEL_ID || ''
};

export default config;
