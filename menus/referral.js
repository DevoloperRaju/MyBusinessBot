module.exports = (bot, chatId, userId) => {
  // আপনার বটের ইউজারনেম বসাও নিচে
  const botUsername = 'YourBotUsername'; // example: MyCoolBot
  const referralLink = `https://t.me/${botUsername}?start=${userId}`;

  // এগুলো ডেটাবেস থেকে আনলে ভালো হয়, এখন ডেমো দিচ্ছি
  const totalReferrals = 3;

  const message = `
👥 *Your Referral Info*

━━━━━━━━━━━━━━━
🔗 *Your Link:* [Click to Share](${referralLink})
👤 *Total Referrals:* \`${totalReferrals}\`

💎 You will earn *10% bonus* from each referral’s income — for *lifetime*!

*Keep sharing to earn more!*
━━━━━━━━━━━━━━━
  `;

  bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
};