function handleRandomNumber(bot, chatId) {
  const numberButtons = [];
  for (let i = 1; i <= 10; i += 2) {
    numberButtons.push([
      { text: `${i}`, callback_data: `rn_pick_${i}` },
      { text: `${i + 1}`, callback_data: `rn_pick_${i + 1}` },
    ]);
  }

  numberButtons.push([{ text: '❌ Cancel', callback_data: 'rn_cancel' }]);

  bot.sendMessage(chatId, 'Pick a number between 1 to 10:', {
    reply_markup: { inline_keyboard: numberButtons }
  });
}

function handleRandomCallback(bot, query, userStates = {}) {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === 'rn_cancel') {
    return bot.editMessageText('Random Number game cancelled.', {
      chat_id: chatId,
      message_id: query.message.message_id
    });
  }

  // User picked a number
  if (data.startsWith('rn_pick_')) {
    const selected = parseInt(data.split('_')[2]);
    userStates[chatId] = { randomSelected: selected };

    return bot.editMessageText(`You selected ${selected}. Confirm to continue.`, {
      chat_id: chatId,
      message_id: query.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [
            { text: '✅ Confirm', callback_data: 'rn_confirm' },
            { text: '❌ Cancel', callback_data: 'rn_cancel' }
          ]
        ]
      }
    });
  }

  // Confirm action
  if (data === 'rn_confirm' && userStates[chatId]?.randomSelected) {
    const userNum = userStates[chatId].randomSelected;
    const randomNum = Math.floor(Math.random() * 10) + 1;
    const ticketNumber = 'RN-100';

    const resultText = userNum === randomNum
      ? `Congratulations! You won!\n\nYour Number: ${userNum}\nResult: ${randomNum}`
      : `Sorry, you lost.\n\nYour Number: ${userNum}\nResult: ${randomNum}`;

    bot.editMessageText(`${resultText}\n\nTicket: ${ticketNumber}`, {
      chat_id: chatId,
      message_id: query.message.message_id
    });

    // Cleanup state
    delete userStates[chatId];
  }
}

module.exports = { handleRandomNumber, handleRandomCallback };