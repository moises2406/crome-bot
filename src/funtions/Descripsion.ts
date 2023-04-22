import { Page } from "puppeteer";
import { settimeo } from "./Aut";

export const Descripsion = async (page: Page) => {
  // TODO: nombre de la persona y el articulo
  const nombre = await page.$eval(
    'h1 > span > span[class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"]',
    (el) => el.textContent
  );

  // TODO: precio y nombre de articulo
  await settimeo(1000);
  const textSelector = await page.waitForSelector("text/RD$");
  const precio: any = await textSelector?.evaluate((el) => el.textContent);

  await settimeo(1000);
  // TODO: url de la img
  const imgs = await page.$x(
    '//img[@class="x1lliihq x14yjl9h xudhj91 x18nykt9 xww2gxu"]'
  );
  if (imgs && imgs.length > 0) {
    const url = await imgs[0].getProperty("src");
    const img = await url.jsonValue();
    const datos = { precio: precio, nombre: nombre, img: img };
    return datos;
  } else {
    const datos = {
      precio: precio,
      nombre: nombre,
      img: "https://soyunperro.com/wp-content/uploads/2017/05/caracteristicas-del-perro-lobo-checoslovaco-tumbado-770x470.jpg",
    };
    return datos;
  }
};

export const Nombre = async (page: Page) => {
// TODO: nombre de la persona y el articulo
const nombre = await page.$eval(
  'h1 > span > span[class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"]',
  (el) => el.textContent
);
return nombre;
};