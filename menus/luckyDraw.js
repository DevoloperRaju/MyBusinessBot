function handleLuckyDraw(bot, chatId) {
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: '✅ Confirm', callback_data: 'lucky_confirm' },
          { text: '❌ Cancel', callback_data: 'lucky_cancel' }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, 'Are you sure you want to join the Lucky Draw for 10 diamonds?', opts);
}

function handleLuckyCallback(bot, query) {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === 'lucky_cancel') {
    bot.editMessageText('Lucky Draw participation cancelled.', {
      chat_id: chatId,
      message_id: query.message.message_id
    });
    return;
  }

  if (data === 'lucky_confirm') {
    // Demo diamond deduction and ticket creation
    const ticketNumber = 'LK-100'; // Later can be dynamic from DB

    bot.editMessageText('You have successfully joined the Lucky Draw!\n\n' +
      `Your Ticket Number: ${ticketNumber}`, {
      chat_id: chatId,
      message_id: query.message.message_id
    });

    // Optionally log for debugging
    console.log(`User ${chatId} joined Lucky Draw with ticket ${ticketNumber}`);
  }
}

module.exports = { handleLuckyDraw, handleLuckyCallback };