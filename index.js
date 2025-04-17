const TelegramBot = require('node-telegram-bot-api');
const mainMenu = require('./menus/mainMenu');
const { handleDailyBonus, checkAnswer } = require('./menus/dailyBonus');

const token = process.env.BT || 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

const userStates = {}; // To track answer state

// 🏠 Go To Home button command (used instead of /start)
bot.onText(/🏠 Go To Home/, (msg) => {
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

  // If expecting an answer for Daily Bonus
  if (userStates[chatId]?.expectingAnswer) {
    checkAnswer(bot, msg, userStates);
    return;
  }

  // Menu buttons
  if (text === '➡️ Next Page') {
    require('./menus/nextMenu')(bot, chatId);
  } else if (text === '⬅️ Previous Page') {
    require('./menus/mainMenu')(bot, chatId);
  } else if (text === '🧾 Balance') {
    require('./menus/balance')(bot, chatId);
  } else if (text === '👥 Referral') {
    require('./menus/referral')(bot, chatId, msg.from.id);
  } else if (text === '✅ Daily Reward') {
    require('./menus/dailyReward')(bot, chatId);
  } else if (text === '🎁 Daily Bonus') {
    handleDailyBonus(bot, chatId, userStates);
  }
});