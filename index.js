const TelegramBot = require('node-telegram-bot-api');

// তোমার BotFather টোকেন
const token = '6114573552:AAGM4fpQcruVb_4icFjU7DitNG0Q3tpFOXo';

// Create bot
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hi! I am alive.');
});

bot.on('message', (msg) => {
  console.log(msg);
});