const { Telegraf } = require("telegraf"); // import telegraf.js

const bot = new Telegraf("5557161585:AAHQmcXO-r5iEr6HJnT36BmnkyVOJiVmpUQ");

// // const compliments = ["Я тебя люблю❤", "Я тебя безумно люблю, малыш❤❤", "Ты мое маленькое солнышко", "Красоточкааа", "Сашенька, ты невероятно красива"];
// // function generateInteger(min, max) {
// //   min = Math.ceil(min);
// //   max = Math.floor(max);
// //   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//Start command
bot.start((ctx) => {
    ctx.reply(
      `Привет, ${ctx.from.first_name}\nЯ бот, разработанный Ильей для того, чтобы тебе было не так грустно в его отсутствие:)\nТы можешь со мной пообщаться и посмотреть мои функции`
    );
    ctx.reply(
      "Вот список команд, которые я выполняю:\n /compliment - Сгенерировать твои любимые нежности"
    );
});
if (ctx.from.first_name == "Илья") {
  //Help command
  bot.help((ctx) => {
    ctx.reply(
      "Вот список команд, которые я выполняю:\n /compliment - Сгенерировать твои любимые нежности"
    );
  });
}
bot.command("compliment", (ctx) => {
  ctx.reply(compliments[generateInteger]);
});
// Run the bot
bot.launch();
