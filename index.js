const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

// Get token from environment variable
const token = process.env.BT;
const bot = new TelegramBot(token, { polling: true });

// Load all command files
fs.readdirSync('./commands').forEach(file => {
  const command = require(`./commands/${file}`);
  command(bot);
});

console.log('Bot is running...');