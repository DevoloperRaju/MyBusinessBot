const TelegramBot = require('node-telegram-bot-api');
const mainMenu = require('./menus/mainMenu');

const token = process.env.BT || 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

// /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = `Welcome to our bot!
Here you will find many exciting options.
Please select from the menu below.`;

  bot.sendMessage(chatId, welcomeMessage.trim()).then(() => {
    mainMenu(bot, chatId);
  });
});

// button handlers
bot.on('message', (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === '➡️ Next Page') {
    require('./menus/nextMenu')(bot, chatId);
  } else if (text === '⬅️ Previous Page') {
    require('./menus/mainMenu')(bot, chatId);
  } else if (text === '🧾 Balance') {
    require('./menus/balance')(bot, chatId);
  }
});