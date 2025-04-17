let ticketCounter = 100;
const colorChoices = ['🟥 Red', '🟩 Green', '🟦 Blue', '🟨 Yellow'];
const userSelections = {};

function handleColorGame(bot, chatId) {
  bot.sendMessage(chatId, 'Please Select A Color:', {
    reply_markup: {
      inline_keyboard: [
        colorChoices.map(color => ({
          text: color,
          callback_data: `select_${color}`
        })),
        [{ text: '❌ Cancel', callback_data: 'cancel_color' }]
      ]
    }
  });
}

function handleColorCallback(bot, query) {
  const chatId = query.message.chat.id;
  const userId = query.from.id;
  const data = query.data;

  // cancel
  if (data === 'cancel_color') {
    bot.answerCallbackQuery(query.id, { text: 'Cancelled' });
    bot.editMessageText('Your Cancel The Game', {
      chat_id: chatId,
      message_id: query.message.message_id
    });
    delete userSelections[userId];
    return;
  }

  // Confirm cancel
  if (data === 'cancel_confirm') {
    bot.answerCallbackQuery(query.id, { text: 'Cancelled' });
    bot.editMessageText('Your Selection Is Cancel', {
      chat_id: chatId,
      message_id: query.message.message_id
    });
    delete userSelections[userId];
    return;
  }

  // Confirm color selection
  if (data === 'confirm_color') {
    const selectedColor = userSelections[userId];
    const ticket = `${selectedColor}-` + ticketCounter++;

    bot.answerCallbackQuery(query.id, { text: 'Confirmed' });
    bot.editMessageText(`Selection Successful! \nYour Ticket Number: ${ticket} \n10 Diamond Cut To Your Balance (Demo)।`, {
      chat_id: chatId,
      message_id: query.message.message_id
    });

    delete userSelections[userId];
    return;
  }

  // Color selected, show confirmation
  if (data.startsWith('select_')) {
    const color = data.split('_')[1];
    userSelections[userId] = color;

    bot.answerCallbackQuery(query.id);
    bot.editMessageText(`Your Selected Color is ${color} Please Press Confirm To Successfully Complete`, {
      chat_id: chatId,
      message_id: query.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [
            { text: '✅ Confirm', callback_data: 'confirm_color' },
            { text: '❌ Cancel', callback_data: 'cancel_confirm' }
          ]
        ]
      }
    });
  }
}

module.exports = {
  handleColorGame,
  handleColorCallback
};