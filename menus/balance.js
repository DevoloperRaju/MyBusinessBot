module.exports = (bot) => {
  bot.onText(/🧾 Balance/, (msg) => {
    const chatId = msg.chat.id;

    // এখানে তোমার ডেটাবেজ থেকে আসল ডেটা আনার কোড থাকবে।
    // এখন শুধু ডেমো ভ্যালু:
    const tkBalance = 12.50;
    const diamondBalance = 1250;

    const message = `
💼 *Your Wallet*

━━━━━━━━━━━━━━━
💰 *Tk Balance:* \`${tkBalance.toFixed(2)}৳\`
💎 *Diamond Balance:* \`${diamondBalance} 💎\`
━━━━━━━━━━━━━━━

🔁 *Note:* You earn *1%* daily income based on your diamond balance.
💸 *Payout every Friday night automatically!*
    `;

    bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
  });
};