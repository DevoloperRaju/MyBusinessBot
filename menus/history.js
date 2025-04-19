module.exports = function showHistory(bot, chatId) {
  const historyText = `
🕑 Your Activity History:

🧾 Balance
- 13 Apr: Earn From Referral (25 💎)
━━━━━━━━━━━━━━━━━━━━━━━━━
🎁 Daily Bonus:
- 13 Apr: Answered Correctly (10 💎)
━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 Color Game:
- 13 Apr: Chose Red (Ticket: RED-10-110)
━━━━━━━━━━━━━━━━━━━━━━━━━
🔢 Random Number:
- 13 Apr: Picked 7 (Ticket: RN-7-105)
━━━━━━━━━━━━━━━━━━━━━━━━━
🎟️ Lucky Draw:
- 13 Apr: Joined (Ticket: LD-110)
━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 Winnings:
- 12 Apr: Won in Color Game (20 💎)
━━━━━━━━━━━━━━━━━━━━━━━━━
👥 Referral Bonus:
- 12 Apr: +5 💎 (from @referredUser)
━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 Achievement
- 10 Apr: Earn From Achievement (50 💎)
━━━━━━━━━━━━━━━━━━━━━━━━━
🎁 Gift Code
- 09 Apr: Received From Gift Code (100 💎)
━━━━━━━━━━━━━━━━━━━━━━━━━
💰 Send Money
- 13 Apr: Send Money To 10000 (10 💰)
━━━━━━━━━━━━━━━━━━━━━━━━━
💎 Send Diamond
- 13 Apr: Send Diamond To 10000 (50 💎)
━━━━━━━━━━━━━━━━━━━━━━━━━
🏅 LeaderBoard
- 10 Apr: Earn From 2nd Referral Achievement (500 💎)
━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim();

  bot.sendMessage(chatId, historyText);
};