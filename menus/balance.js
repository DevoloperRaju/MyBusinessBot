module.exports = (bot, chatId) => {
  const tkBalance = 10.00;
  const diamondBalance = 1000;

  const message = `
💼 *Your Wallet*

━━━━━━━━━━━━━━━
💰 *Tk Balance:* \`${tkBalance.toFixed(2)}৳\`
💎 *Diamond Balance:* \`${diamondBalance} 💎\`
━━━━━━━━━━━━━━━

🔁 *Note:* You earn *1%* daily income based on your diamond balance.  
💸 *Payout every Friday night automatically!*

⚙️ If you need to change wallet, go to *Profile* and edit your details.
  `;

  bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
};