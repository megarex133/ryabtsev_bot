const { Telegraf } = require("telegraf"); // import telegraf.js

const bot = new Telegraf('5557161585:AAHQmcXO-r5iEr6HJnT36BmnkyVOJiVmpUQ');

const compliments = ["Я тебя люблю❤", "Я тебя безумно люблю, малыш❤❤", "Ты мое маленькое солнышко", "Красоточкааа", "Сашенька, ты невероятно красива", "Такая ты милашечка",
  "Карапуз мой маленький", "Ты самая искренняя девушка из всех, что я встречал", "Обожаю тебя", "У тебя такие милые щечки", "От тебя всегда вкусно пахнет", "Ты, кстати, похожа на котеночка))", "Не могу представить жизни без тебя", "Ну ты и соска",
  "Солнышко ты мое любимое", "У тебя бесподобное тело", "Я счастлив, что у меня есть такой малыш", "С тобой так приятно засыпать и просыпаться", "Ты просто ооочень аппетитная", "Хочу видеть твои глазки каждый день",
  "Не представляю жизни без тебя", "Такая ты хорошенькая", "Ты всегда у меня в голове", "Засосать бы тебя сейчас)", "Ты самое ценное для меня",
  "Сегодня очень красивая луна)", "Хозяюшка моя", "Ты действительно самая заботливая", "Для меня ты просто идеальная", "Ты самая лучшая", "В тебе всегда приятно😁",
  "Ты меня удовлетворяешь на все 100% процентов", "Не требовательная ты, карапуз", "Нет, я не трачу на тебя много денег, любима", "Ты у меня единственная и любимая",
  "Боже мой, ну какая же ты красивая", "С тобой очень интересно общаться", "Умниичка моя", "Ты очень трудолюбивая", "Спасибо за твою заботу, родная",
  "Ты стала для меня родной за это время", "Не могу не сказать, что ты классно делаешь минет, хехе)", "Мое доверие к тебе абсолютно", "Люблю тебя безмерно❤",
  "У меня сносит голову от милоты своей", "Мне, на самом деле, нравится твой юмор", "Хочу тебя😋", "Твоя стрепня самая вкусная для меня",
  "Я бы только с тобой и гулял, зайка", "Я очень дорожу твоей поддержкой", "Моей любви к тебе нет предела", "Так обожаю твои маленькие ручки",
  "Ты очень добрая", "В тебе все прекрасно", "Зайчик, я думаю о тебе прямо сейчас)", "Ты невероятно сексуальна", "Тобой можно восхищаться и брать в пример",
  "С каждой встречей влюбляюсь в тебя всё больше", "Ты большая молодец", "Есть много поводов гордится тобой", "В тебе просто невозможная смесь красоты и милоты",
  "Ты у меня ассоциируешься с маленьким ангелочком", "Одна только мысль о тебе греет мне душу как о чем-то светлом и теплом", "ы божественна", "Ты самая-самая идеальная",
  "Завидую сам себе, что ты у меня есть"];
const love = ["Я тебя очень сильно люблю", "Просто безумно люблю тебя", "А я тебя безумно сильно люблю!", "Невероятно сильно люблю тебя", "Люблю тебя по-настоящему",
  "Больше всех тебя люблю"];

const morning = ["Доброе утро, малыш", "Доброе утро, солнышко", "Доброе утро, котенок", "Доброе утро, карапуз", "Утро доброе, Сашенька"];

const evening = ["Спокойной ночи, малыш❤❤❤", "Сладких снов, любимая❤❤❤", "Сладких снов, ангелочек мой❤❤❤", "Добрых снов, Сашенька", "Спокойно ночи, родная"];

const missing = ["И я по тебе очень сильно скучаю", "Уже соскучился по тебе", "Соскучился сильно-сильно"];

function generateInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Count days 
function dateDiff(startingDate, endingDate) {
  let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
  if (!endingDate) endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
  let endDate = new Date(endingDate);
  if (startDate > endDate) {
    var swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  let startYear = startDate.getFullYear();
  let february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
  let daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let yearDiff = endDate.getFullYear() - startYear;
  let monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  let dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) monthDiff--;
    else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }
  return ((yearDiff != 0) ? `${yearDiff} лет `: '') +  ((monthDiff != 0) ? `${monthDiff} месяцев `: '') +  ((dayDiff != 0) ? `${dayDiff} дней `: '');
}

//Start command
bot.start((ctx) => {
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
      "Вот список команд, которые я выполняю:\n /compliment - Сгенерировать твои любимые нежности\n /together - Сколько мы с тобой вместе"
    );
  });
bot.command("compliment", (ctx) => {
  ctx.reply(compliments[generateInteger(0,compliments.length-1)]);
})
// Together command
bot.command("together", (ctx) => {
  ctx.reply("Мы вместе " + dateDiff('2021-11-23',Date.now()));
});
// Army command
bot.command("army", (ctx) => {
  ctx.reply("До конца сборов осталось " + dateDiff(Date.now(),'2022-07-28'));
});
 //Replys to messages
bot.hears(/люблю/i, (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, love[generateInteger(0,love.length-1)])
});
bot.hears(/доброе утро/i, (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, morning[generateInteger(0,morning.length-1)])
});
bot.hears(/сладких снов/i, (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, evening[generateInteger(0,evening.length-1)])
});
bot.hears(/спокойной ночи/i, (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, evening[generateInteger(0,evening.length-1)])
});
bot.hears(/скучаю/i, (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, missing[generateInteger(0,missing.length-1)])
});
bot.hears(/соскучилась/i, (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, missing[generateInteger(0,missing.length-1)])
});
// Run the bot
bot.launch();
