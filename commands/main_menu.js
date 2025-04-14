module.exports = (bot) => {
  bot.onText(/\/start/, (msg) => {
    sendMainMenu(bot, msg.chat.id);
  });

  bot.onText(/➡️ Next Page/, (msg) => {
    const nextMenu = require('./next_menu');
    nextMenu(bot, msg);
  });
};

function sendMainMenu(bot, chatId) {
  bot.sendMessage(chatId, 'Welcome to the Main Menu! Please choose an option below:', {
    reply_markup: {
      keyboard: [
        ['🧾 Balance', '👥 Referral'],
        ['✅ Daily Task', '🆘 Support'],
        ['🏆 Achievement', '🙍‍♂️ Profile'],
        ['🚀 Our Project', '➡️ Next Page']
      ],
      resize_keyboard: true
    }
  });
}