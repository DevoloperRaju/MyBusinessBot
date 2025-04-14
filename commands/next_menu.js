const mainMenu = require('./main_menu');

module.exports = (bot) => {
  bot.onText(/➡️ Next Page/, (msg) => {
    const chatId = msg.chat.id;

    const nextMenu = {
      reply_markup: {
        keyboard: [
          ['🎁 Gift Code', '🕑 History'],
          ['📢 Notice', '🧩 Learn About IoLent'],
          ['⬅️ Previous Page', '🏅 LeaderBoard']
        ],
        resize_keyboard: true
      }
    };

    bot.sendMessage(chatId, 'Welcome to the Next Menu! Please choose an option below:', nextMenu);
  });

  // Previous Page (Go back to Main Menu)
  bot.onText(/⬅️ Previous Page/, (msg) => {
    require('./main_menu')(bot);
    bot.sendMessage(msg.chat.id, 'Back to Main Menu!', {
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
  });
};