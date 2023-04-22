import { Page } from "puppeteer";
import { settimeo } from "./Aut";

const uris2 =
  "x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1c4vz4f x2lah0s x1i64zmx x1emribx x1y1aw1k x1sxyh0 xwib8y2 xurb0ha";

export const SendMensageText = async (
  page: Page,
  msg: string,
  boliano: boolean
) => {
  const userName = await page.$x(
    '//div[@class="xzsf02u x1a2a7pz x1n2onr6 x14wi4xw x1iyjqo2 x1gh3ibb xisnujt xeuugli x1odjw0f notranslate"]'
  );

  if (userName) {
    if (userName.length > 0) {
      await userName[0].focus();
      await page.keyboard.type(msg);
  
      if (boliano) {
        await settimeo(1000 * 10);
      }
  
      const button: any = await page.$x(
        `//div[@class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1c4vz4f x2lah0s x1i64zmx x1emribx x1y1aw1k x1sxyh0 xwib8y2 xurb0ha"]`
      );
      button[0].click(`//div[@class="${uris2}"]`);
    }
  }
};
