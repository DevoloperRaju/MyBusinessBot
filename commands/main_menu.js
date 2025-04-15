const sendNextMenu = require('./next_menu');

module.exports = (bot) => {
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '➡️ Next Page') {
      sendNextMenu(bot, chatId);
    }

    else if (text === '⬅️ Previous Page') {
      sendMainMenu(bot, chatId, 'Back to Main Menu!');
    }
  });
};

function sendMainMenu(bot, chatId, customMessage = 'Welcome to the Main Menu! Please choose an option below:') {
  const menu = {
    reply_markup: {
      keyboard: [
        ['🧾 Balance', '👥 Referral'],
        ['✅ Daily Task', '🆘 Support'],
        ['🏆 Achievement', '🙍‍♂️ Profile'],
        ['🚀 Our Project', '➡️ Next Page']
      ],
      resize_keyboard: true
    }
  };

  bot.sendMessage(chatId, customMessage, menu);
}

module.exports = sendMainMenu; // export the sendMainMenu function