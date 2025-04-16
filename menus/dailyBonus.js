module.exports = {
  handleDailyBonus: (bot, chatId, userStates) => {
    const question = "❓ In which year did IoLent start its business?";
    userStates[chatId] = { expectingAnswer: true };

    bot.sendMessage(chatId, `${question}\n\nPlease reply with the correct year.`);
  },

  checkAnswer: (bot, msg, userStates) => {
    const chatId = msg.chat.id;
    const userAnswer = msg.text.trim();

    if (userStates[chatId]?.expectingAnswer) {
      userStates[chatId] = {}; // Reset user state

      if (userAnswer === "2023") {
        bot.sendMessage(chatId, "✅ Correct answer! You’ve received 10 Diamond bonus.\n\n*(Note: This is a demo, no diamonds were actually added.)*");
      } else {
        bot.sendMessage(chatId, "❌ Incorrect answer. Please try again tomorrow.");
      }
    }
  }
};