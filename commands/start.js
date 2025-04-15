const sendMainMenu = require('./main_menu');

module.exports = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const welcomeMessage = `
Welcome to our bot!
Here you will find many exciting options.
Please select from the menu below.
    `;

    bot.sendMessage(chatId, welcomeMessage.trim())
      .then(() => {
        sendMainMenu(bot, chatId);
      });
  });
};