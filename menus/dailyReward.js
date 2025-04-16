module.exports = (bot, chatId) => {
  const menu = {
    reply_markup: {
      keyboard: [
        ['🎁 G', '🕑 H'],
        ['📢 N', '👥 O'],
        ['💰 S', '💎 S'],
        ['🧩 L', '📢 P'],
        ['⬅️ Previous Page', '🏅 L']
      ],
      resize_keyboard: true
    }
  };

  bot.sendMessage(chatId, 'Welcome to the Reward World! Please choose an option below:', menu);
};