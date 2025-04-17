const TelegramBot = require('node-telegram-bot-api');
const mainMenu = require('./menus/mainMenu');
const { handleDailyBonus, checkAnswer } = require('./menus/dailyBonus');
const { handleColorGame, handleColorCallback } = require('./menus/colorGame'); // ✅ Color Game
const { handleLuckyDraw, handleLuckyCallback } = require('./menus/luckyDraw'); // ✅ Lucky Draw
const { handleRandomNumber, handleRandomCallback } = require('./menus/randomNumberGame');

const token = process.env.BT || 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

const userStates = {}; // To track answer state

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = `Welcome to our bot! 
Here you will find many exciting options. 
Please select from the menu below.`;

  bot.sendMessage(chatId, welcomeMessage.trim()).then(() => {
    mainMenu(bot, chatId);
  });
});

bot.on('message', (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (userStates[chatId]?.expectingAnswer) {
    checkAnswer(bot, msg, userStates);
    return;
  }

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
  } else if (text === '🎨 Color Game') {
    handleColorGame(bot, chatId); // ✅ Color Game Handler
  } else if (text === '🎟️ Lucky Draw') {
    handleLuckyDraw(bot, chatId); // ✅ Lucky Draw Handler
  } else if (text === '🔢 Random Number') {
  handleRandomNumber(bot, chatId);
  } else if (text === '🏠 Go To Home') {
    const welcomeMessage = `Welcome to our bot! 
Here you will find many exciting options. 
Please select from the menu below.`;

    bot.sendMessage(chatId, welcomeMessage.trim()).then(() => {
      mainMenu(bot, chatId);
    });
  }
});

// ✅ Inline Callback Handler
bot.on('callback_query', (query) => {
  // Color Game Callbacks
  handleColorCallback(bot, query);

handleRandomCallback(bot, query, userStates);

  // Lucky Draw Callback
  if (query.data.startsWith('lucky_')) {
    handleLuckyCallback(bot, query);
  }
});