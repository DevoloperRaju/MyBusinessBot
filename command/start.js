module.exports = (bot) => {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hi! I am alive.");
  });
};