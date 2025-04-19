function handleWinnerList(bot, chatId) {
  // Dummy Data (পরবর্তীতে ডাটাবেজ কানেক্ট করলে এখানেই query হবে)

  // 1. Color Game Winner
  const winningColor = "Red";
  const colorWinners = "@example11, @example12, @example13";
  const colorWinnerCount = 3;
  const colorDiamondPerWinner = 30;

  // 2. Lucky Draw Winners
  const luckyWinners = "@luckyUser1, @luckyUser2, @luckyUser3, @luckyUser4, @luckyUser5, @luckyUser6, @luckyUser7, @luckyUser8, @luckyUser9, @luckyUser10";
  const luckyDiamondPerWinner = 50;

  // 3. Random Number Winner
  const winningNumber = 7;
  const numberWinners = "@rnUser1, @rnUser2";
  const numberWinnerCount = 2;
  const numberDiamondPerWinner = 40;

  const message = `
🏅 *Yesterday's Winner List*

🎨 *Color Game*
Winning Color: *${winningColor}*
Total Winners: *${colorWinnerCount}*
Winners: ${colorWinners}
Reward per winner: *${colorDiamondPerWinner}* diamonds

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎟️ *Lucky Draw*
Total Winners: *10*
Winners: ${luckyWinners}
Reward per winner: *${luckyDiamondPerWinner}* diamonds

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔢 *Random Number Game*
Winning Number: *${winningNumber}*
Total Winners: *${numberWinnerCount}*
Winners: ${numberWinners}
Reward per winner: *${numberDiamondPerWinner}* diamonds

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
}

module.exports = handleWinnerList;