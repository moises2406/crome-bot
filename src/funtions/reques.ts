import axios from "axios";
import { Browser, Page } from "puppeteer";
import { settimeo } from "./Aut";
import { Descripsion, Nombre } from "./Descripsion";
import { basededatos, Residentificador, Uris } from "./marketplace";

let uris: any = [];
let PostArray: any[] = [];

interface DatosDPerson {
  precio: string | null;
  nombre: string | null;
  img: string | unknown;
}

// export const consulta = async (
//   position: number,
//   Uris: Uris,
//   page: Page,
//   usuario: string,
//   user_Id: string
// ): Promise<any> => {
//   try {
//     if (position) {
//       let index = 0;
//       if (index <= position) {
//         const url = Uris[index];
//         const res = await axios.post(`${process.env.PORT}/urisUrl`, {
//           uri: url,
//         });
//         if (res.data.resdatos) {
//           await Apdate(url, page);
//           if (index === position) {
//             return "echo";
//           } else {
//             index++;
//             consulta(index, Uris, page, usuario, user_Id);
//           }//271928
//         } else {
//           await SavePost([url], page, usuario, user_Id, true);
//           if (index === position) {
//             return "echo";
//           } else {
//             index++;
//             consulta(index, Uris, page, usuario, user_Id);
//           }
//         }
//       }
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

export const SavePost = async (
  Uris: Uris,
  page: Page,
  usuario: string,
  user_Id: string,
) => {
  for (let index = 0; index < Uris.length; ) {
    console.log(Uris.length, "g");
    const url = Uris[index];

    const ok = await interval(url, page, usuario, user_Id);
    if (ok === "ok") {
      index++;
      console.log(index);
      if (index === Uris.length - 1) {
      }
    }
  }

  // TODO: crea datos nuevos con los datos no encontrados []
};

export const SearchChat = async (
  { identificador }: Residentificador,
  page: Page
) => {
  await page.goto(identificador);

  await settimeo(5000);

  return "SearchChat";

  // TODO: evalua si concuerda con los datos guardados
};

export const createChat = async (
  Uris: Uris,
  page: Page,
  usuario: string,
  user_Id: string
) => {
  await SavePost(Uris, page, usuario, user_Id);
  // TODO: evalua si concuerda con los datos guardados
};

const interval = async (
  url: string,
  page: Page,
  usuario: string,
  user_Id: string,
): Promise<any> => {
  await page.goto(url);

  await settimeo(1000 * 10);

  const textP = await page.$x('//div[@class="__fb-light-mode x1n2onr6"]');

  if (textP && textP.length > 0) {
    // TODO: nombre de la persona, el articulo u el precio
    const datoss: DatosDPerson = await Descripsion(page);

    for (let ind = 0; ind < textP.length; ind++) {
      const nodeText = await textP[ind].getProperty("textContent"); //Enviaste
      const myText: any = await nodeText.jsonValue();

      PostArray.push(myText);
      if (ind == textP.length - 1) {
        const ris = await axios.post(`${process.env.PORT}/conver`, {
          uriss: url,
          conver: PostArray,
          nombre: datoss.nombre,
          precio: datoss.precio,
          usuario,
          user_Id,
          img: datoss.img,
        });
        PostArray = [];
        console.log(ris.data);
        return "ok";
      }
    }
  } else {
    return "interval no mando nada";
  }
};

const Apdate = async (url: string, page: Page): Promise<any> => {
  await page.goto(url);

  await settimeo(1000 * 10);

  const textP = await page.$x('//div[@class="__fb-light-mode x1n2onr6"]');

  if (textP && textP.length > 0) {
    const name:any = await Nombre(page);
    for (let ind = 0; ind < textP.length; ind++) {
      const nodeText = await textP[ind].getProperty("textContent"); //Enviaste
      const myText: any = await nodeText.jsonValue();

      PostArray.push(myText);
      if (ind == textP.length - 1) {
        const ris = await axios.post(`${process.env.PORT}/apdateConver`, {
          uriss: url,
          conver: PostArray,
          nombre: name,
        });
        PostArray = [];
        console.log(ris.data);
        return "ok";
      }
    }
  } else {
    return "interval no mando nada";
  }
};
