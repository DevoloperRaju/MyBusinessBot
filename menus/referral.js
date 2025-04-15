module.exports = (bot, chatId, userId) => {
  const botUsername = 'IoLent_bot'; // তোমার বটের ইউজারনেম বসাও
  const referralLink = `https://t.me/${botUsername}?start=${userId}`;
  const totalReferrals = 0; // ডেমো ভ্যালু

  const message = `
👥 *Your Referral Info*

━━━━━━━━━━━━━━━
🔗 *Your Referral Link:* 
\`${referralLink}\`

📋 _Click and hold to copy this link_
👤 *Total Referrals:* \`${totalReferrals}\`

💎 You earn *10%* of your referral’s daily income — for *lifetime*! with Unlimited Generation
━━━━━━━━━━━━━━━
  `;

  bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
};