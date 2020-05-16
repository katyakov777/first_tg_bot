const TelegramBot = require("node-telegram-bot-api")

const TOKEN = "1181357045:AAGRDMJijfj96z_rOWt9WfAjK1v4Hp0LhY4"

const bot = new TelegramBot (TOKEN, {
  polling: true
});

let x = 2000;


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === "200 мл" && x>200) { 
     x=x-200
     bot.sendMessage(chatId, 'Молодец! Осталось еще ' + (x) + " мл"
      )
  } else if (x===200) {
    bot.sendMessage(chatId, 'Отлично! 2 литра есть. Теперь ты не умрешь от обезвоживания! :)')}
  else {
    bot.sendMessage(chatId, 'Привет, ' + msg.from.first_name + ". Твоя цель на сегодня - выпить 2 литра водички! Поехали :)", {
      reply_markup: {
        keyboard: [ 
          ['200 мл']
        ]
      }
    })
  }
})
 

 

