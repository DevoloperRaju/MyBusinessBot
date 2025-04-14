require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const token = process.env.BT || 'YOUR_FALLBACK_TOKEN_HERE';

const bot = new TelegramBot(token, { polling: true });

fs.readdirSync('./commands').forEach(file => {
  const command = require(`./commands/${file}`);
  command(bot);
});

console.log('Bot is running...');