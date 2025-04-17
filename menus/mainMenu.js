module.exports = (bot, chatId) => {
  const message = `Welcome to the Main Menu! Please choose an option below:`;

  bot.sendMessage(chatId, message); // No reply_markup
};