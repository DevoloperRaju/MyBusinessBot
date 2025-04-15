const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

require('./commands/start')(bot);
require('./commands/main_menu')(bot);