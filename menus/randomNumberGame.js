function handleRandomNumberGame(bot, chatId) {
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [1,2,3,4,5].map(num => ({ text: `${num}`, callback_data: `rn_select_${num}` })),
        [6,7,8,9,10].map(num => ({ text: `${num}`, callback_data: `rn_select_${num}` })),
        [{ text: '❌ Cancel', callback_data: 'rn_cancel' }]
      ]
    }
  };

  bot.sendMessage(chatId, 'Pick a number between 1 and 10. Entry cost: 10 diamonds.', opts);
}

const userRandomSelections = {};

function handleRandomNumberCallback(bot, query) {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === 'rn_cancel') {
    bot.editMessageText('Random Number game cancelled.', {
      chat_id: chatId,
      message_id: query.message.message_id
    });
    return;
  }

  if (data.startsWith('rn_select_')) {
    const selectedNumber = data.split('_')[2];
    userRandomSelections[chatId] = selectedNumber;

    bot.editMessageText(`You selected number ${selectedNumber}.\n\nPlease confirm your entry.`, {
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
    return;
  }

  if (data === 'rn_confirm') {
    const selected = userRandomSelections[chatId];
    delete userRandomSelections[chatId];

    const ticketNumber = `RN-${selected}-100`; // ডেমো টিকিট

    bot.editMessageText(`Your entry for Random Number is successful!\nTicket: ${ticketNumber}\nResult will be announced tonight.`, {
      chat_id: chatId,
      message_id: query.message.message_id
    });

    console.log(`User ${chatId} entered Random Number with ${selected}`);
  }
}

module.exports = { handleRandomNumberGame, handleRandomNumberCallback };