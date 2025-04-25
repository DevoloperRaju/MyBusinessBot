module.exports = (bot, chatId) => {
  const menu = {
    reply_markup: {
      keyboard: [
        ['ℹ️ Set Wallet', 'ℹ️ Set FB'],
        ['ℹ️ Set Area', 'ℹ️ Set etc'],
        ['➡️ Next Page']
      ],
      resize_keyboard: true
    }
  };

  bot.sendMessage(chatId, 'Welcome to the Main Menu! Please choose an option below:', menu);
};