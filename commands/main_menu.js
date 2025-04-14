module.exports = (bot, chatId) => {
  bot.sendMessage(chatId, 'Please choose an option from the menu below:', {
    reply_markup: {
      keyboard: [
        ['🧾 Balance', '👥 Referral'],
        ['✅ Daily Task', '🆘 Support'],
        ['🏆 Achievement', '🙍‍♂️ Profile'],
        ['🚀 Our Project', '➡️ Next Page']
      ],
      resize_keyboard: true, // মোবাইলে সুন্দর দেখানোর জন্য
      one_time_keyboard: false // বারবার দেখানোর জন্য false
    }
  });
};