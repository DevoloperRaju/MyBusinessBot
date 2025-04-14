const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

// Replace with your bot token
const token = '6114573552:AAGM4fpQcruVb_4icFjU7DitNG0Q3tpFOXo';
const bot = new TelegramBot(token, { polling: true });

// Load all command files
fs.readdirSync('./commands').forEach(file => {
  const command = require(`./commands/${file}`);
  command(bot);
});

console.log('Bot is running...');