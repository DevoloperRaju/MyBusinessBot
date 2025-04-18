module.exports = (bot, chatId) => {
  const menu = {
    reply_markup: {
      keyboard: [
        ['🎁 Gift Code', '🆘 Support'],
        ['📢 Notice', '👥 Our Admin'],
        ['💰 Send Money', '💎 Send Diamond'],
        ['🧩 Learn About IoLent', '📢 Promot Me'],
        ['⬅️ Previous Page', '🏅 LeaderBoard']
      ],
      resize_keyboard: true
    }
  };

  bot.sendMessage(chatId, 'Welcome to the Next Menu! Please choose an option below:', menu);
};