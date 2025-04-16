module.exports = (bot, chatId) => {
  const menu = {
    reply_markup: {
      keyboard: [
        ['🧾 Balance', '👥 Referral'],
        ['✅ Daily Reward', '🆘 Support'],
        ['🏆 Achievement', '🙍‍♂️ Profile'],
        ['🚀 Our Project'],
        ['💰 To 💎', '➡️ Next Page']
      ],
      resize_keyboard: true
    }
  };

  bot.sendMessage(chatId, 'Welcome to the Main Menu! Please choose an option below:', menu);
};