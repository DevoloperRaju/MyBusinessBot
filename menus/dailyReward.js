module.exports = (bot, chatId) => {
  const menu = {
    reply_markup: {
      keyboard: [
        ['🎁 Daily Bonus', '🎨 Color Game'],
        ['🎟️ Lucky Draw', '🔢 Random Number'],
        ['⬅️ Previous Page', '🏅 Winner List']
      ],
      resize_keyboard: true
    }
  };

  bot.sendMessage(chatId, 'Welcome to the Reward World! Please choose an option below:', menu);
};