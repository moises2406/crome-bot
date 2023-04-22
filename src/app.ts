import { config } from "dotenv";
config();
import { PuppeteerNode, Page } from "puppeteer";
import { autenticate, settimeo } from "./funtions/Aut";
import { Enviar, IdDePersonas, Rebisarchat } from "./funtions/marketplace";
import { SendMensageText } from "./funtions/Mesages";
import { socket } from "./funtions/socket";

let check: string[] = [];

export const run = async (
  puppeteer: PuppeteerNode,
  name: string,
  password: string,
  _id: string
) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const page2 = await browser.newPage();
  const page3 = await browser.newPage();

  await page.goto("https://www.messenger.com/login/");

  await settimeo(3000);

  await autenticate(page, name, password);

  await settimeo(5000);

  await page.goto("https://www.messenger.com/marketplace/");

  await settimeo(10 * 1000);
  // TODO: interval para el modelo de datos
  let Interval = async () => {
    try {
      const Uris: string[] | any = await IdDePersonas(page);

      if (Uris) {
        if (Uris.length > 0) {
          if (Uris[0] === check[0]) {
            const res = await Rebisarchat(page2, check[0]);
            console.log(res);
            console.log("no tienes mensages nuevos");
            await settimeo(1000);
            Interval();
          } else {
            check = Uris;
            const res = await Enviar(check, page2, _id, name);
            console.log(res);
            await settimeo(1000);

            Interval();
          }
        }
      }
    } catch (e) {
      console.log("errol in line app.ts:59 moises: ", e);
    }
  };
  Interval();

  //TODO: socket emit messages
  socket.on("msg-client-bot", (args) =>{
    console.log(args.url, args.msg);

    if (args.user === name) {
      SendMensage(page3, args.url, args.msg);
    }
  });
};

const SendMensage = async (page: Page, url: string, msg: string) => {
  const urlNow = page.url();

  try {
    if (urlNow === url) {
      console.log("estoy1aki");

      SendMensageText(page, msg, false);
    } else {
      console.log("estoy2aki");

      await page.goto(url);
      await settimeo(10 * 1000);
      SendMensageText(page, msg, true);
    }
  } catch (e) {
    console.log(e);
  }
};

//font-size: 35px; font-weight: bold; font-weight: 500; margin-top: 30px;
