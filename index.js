const puppeteer = require("puppeteer");

// TODO: esto es la funcion de espera
function settimeo(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

const uris =
  "x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq xdj266r x11i5rnm xat24cr x1mh8g0r x889kno x1iji9kk x1a8lsjc x1sln4lm";

const uris2 =
  "x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1c4vz4f x2lah0s x1i64zmx x1emribx x1y1aw1k x1sxyh0 xwib8y2 xurb0ha";

const run = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setGeolocation({latitude: 59.95, longitude: 30.31667});
  await page.goto("https://youtube.com/");

  // Set screen size
  await page.setViewport({ width: 1080, height: 500 });
//
  //await settimeo(5000);
//
  //// TODO: auth
  //await page.type("#email", "nu0126425@gmail.com");
  //await page.type("#pass", "moises.,809");
//
  //// Wait and click on first result
  //const searchResultSelector = "#loginbutton";
  //await page.waitForSelector(searchResultSelector);
  //await page.click(searchResultSelector);
//
  //await settimeo(5000);
//// TODO: ... navega
  //await page.goto("https://www.messenger.com/marketplace/");
//
  //await settimeo(5000);
//
  //// // TODO: id de personas: url
  //// const el = await page.$x(
  ////   '//a[@class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq xdj266r x11i5rnm xat24cr x1mh8g0r x889kno x1iji9kk x1a8lsjc x1sln4lm"]'
  //// );
  //// for (let index = 0; index < el.length; index++) {
  ////   const text = await el[index].getProperty("href");
  ////   const name = await text.jsonValue();
  ////   console.log(name);
  //// }
  //
//// TODO: navega
  //await page.goto(`https://www.messenger.com/marketplace/t/5632399773533279/`);
//
  //await settimeo(5000);
//
//
  //// TODO: nombre de la persona y el articulo
  //const nombre = await page.$eval(
  //  'span[class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"]',
  //  (el) => el.textContent
  //);
  //console.log(nombre);
//
//// TODO: precio y nombre de articulo
  //await settimeo(1000);
  //const textSelector = await page.waitForSelector("text/RD$");
  //const fullTitle = await textSelector.evaluate((el) => el.textContent);
  //console.log(fullTitle);
//
  //await settimeo(5000);
//
  //// TODO: seleciona el input de texto para escrivir
  //const res = await page.$x(
  //  '//div[@class="xzsf02u x1a2a7pz x1n2onr6 x14wi4xw x1iyjqo2 x1gh3ibb xisnujt xeuugli x1odjw0f notranslate"]'
  //);
  //res[0].type("hola, lipi como estas");
  //await settimeo(3000)
//
//
  //// TODO: buton para enviar el texto
  //const button = await page.$x(`//div[@class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1c4vz4f x2lah0s x1i64zmx x1emribx x1y1aw1k x1sxyh0 xwib8y2 xurb0ha"]`)
  //button[0].click(`//div[@class="${uris2}"]`)
//
};//
run();
//