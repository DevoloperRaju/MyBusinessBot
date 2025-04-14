module.exports = (bot, chatId) => {
  const options = {
    reply_markup: {
      keyboard: [
        [{ text: 'Option 1' }, { text: 'Option 2' }],
        [{ text: 'Option 3' }]
      ],
      resize_keyboard: true,
      one_time_keyboard: false,
    },
  };

  bot.sendMessage(chatId, 'Please choose an option:', options);
};