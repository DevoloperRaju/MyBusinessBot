module.exports = (bot, chatId) => {
  const menu = {
    reply_markup: {
      keyboard: [
        ['🎁 Gift Code', '🕑 History'],
        ['📢 Notice', '🧩 Learn About IoLent'],
        ['💰 Send Money', '💎 Send Diamond'],
        ['⬅️ Previous Page', '🏅 LeaderBoard']
      ],
      resize_keyboard: true
    }
  };

  bot.sendMessage(chatId, 'Welcome to the Next Menu! Please choose an option below:', menu);
};