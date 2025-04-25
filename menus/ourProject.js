module.exports = (bot, chatId) => {
  const message = `🚀 *Our Projects*  
  
নিচে আমাদের উপ-প্রজেক্টসমূহের তালিকা দেওয়া হলো। প্রতিটি প্রজেক্টে অংশগ্রহণ করে ডায়মন্ড ইনকাম করুন:

1. YouTube Sub Bot – ইউটিউব চ্যানেল সাবস্ক্রাইব করে ইনকাম।
2. Instagram Like Bot – ইনস্টাগ্রাম পোস্টে লাইক দিয়ে ইনকাম। (Coming Soon)
3. Facebook Page Bot – ফেসবুক পেজ ফলো দিয়ে ইনকাম। (Under Development)
4. Daily Quiz Bot – প্রশ্নের উত্তর দিয়ে ডায়মন্ড জিতুন।

প্রজেক্টে যোগ দিতে নিচের বাটনে ক্লিক করুন:`;

  const options = {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          { text: '▶️ YouTube Sub Bot', url: 'https://t.me/YOUR_YOUTUBE_BOT' }
        ],
        [
          { text: '▶️ Daily Quiz Bot', url: 'https://t.me/YOUR_QUIZ_BOT' }
        ],
        [
          { text: '📌 Instagram Like Bot (Coming Soon)', callback_data: 'coming_soon' }
        ],
        [
          { text: '📌 Facebook Page Bot (Under Dev)', callback_data: 'under_dev' }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, message, options);
};