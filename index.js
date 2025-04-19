const TelegramBot = require('node-telegram-bot-api');
const mainMenu = require('./menus/mainMenu');
const { handleDailyBonus, checkAnswer } = require('./menus/dailyBonus');
const { handleColorGame, handleColorCallback } = require('./menus/colorGame');
const { handleLuckyDraw, handleLuckyCallback } = require('./menus/luckyDraw');
const { handleRandomNumberGame, handleRandomNumberCallback } = require('./menus/randomNumberGame');
const handleWinnerList = require('./menus/winnerList'); // ✅ Winner List handler
const showHistory = require('./menus/history'); // 🕑 History handler

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
    handleColorGame(bot, chatId);
  } else if (text === '🎟️ Lucky Draw') {
    handleLuckyDraw(bot, chatId);
  } else if (text === '🔢 Random Number') {
    handleRandomNumberGame(bot, chatId);
  } else if (text === '🏅 Winner List') {
    handleWinnerList(bot, chatId);
  } else if (text === '🕑 History') {
    showHistory(bot, chatId); // ✅ Connected History
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
  handleColorCallback(bot, query);
  handleLuckyCallback(bot, query);
  handleRandomNumberCallback(bot, query);
});