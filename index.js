const { Telegraf } = require("telegraf"); // import telegraf.js

const bot = new Telegraf(process.env.BOT_TOKEN);

//Start command
bot.start((ctx) => {
  if (ctx.from.username === "@sane4_kaaaaaa" || ctx.from.first_name === "@rilya1")
  ctx.reply(
    `Привет, ${ctx.from.first_name}\nЯ бот, разработанный Ильей для того, чтобы тебе было не так грустно в его отсутствие:)\nТы можешь со мной пообщаться и посмотреть мои функции`
  );
  ctx.reply(
    "Вот список команд, которые я выполняю:\n /compliment - Сгенерировать твои любимые нежности"
  );
});

//Help command
bot.help((ctx) => {
  ctx.reply(
    "Вот список команд, которые я выполняю:\n /compliment - Сгенерировать твои любимые нежности"
  );
});
bot.command("compliment", (ctx) => {
  ctx.reply("Введи номер учебной группы");
 
});
// Run the bot
bot.launch();
