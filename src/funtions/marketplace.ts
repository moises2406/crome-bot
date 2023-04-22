import { Browser, Page } from "puppeteer";
import { settimeo } from "./Aut";
import axios from "axios";
import {  createChat, SavePost, SearchChat } from "./reques";
import { socket } from "./socket";

let arreglo: unknown[] = [];
let arreglo2: unknown[] = [];

export interface Residentificador {
  cliente: string;

  dueño: string;

  Position:number;

  identificador: string;

  precio: string;

  clase: string;

  conversacion: Convers[];
}

export interface Convers {
  cliente: string;
  conversacion: string;
  posicion: number;
}

export interface basededatos {
  position: number;
}

export type Uris = string[];

let mensageChat: any;

let arregolsDeMensages: any[] = [];

const port = process.env.PORT || "http://localhost:4000/";

export const IdDePersonas = async (page: Page): Promise<any> => {
  // TODO: id de personas: url

  try {
    const el = await page.$x(
      '//a[@class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq xdj266r x11i5rnm xat24cr x1mh8g0r x889kno x1iji9kk x1a8lsjc x1sln4lm"]'
    );

    if (el && el.length > 0) {
      for (let index = 0; index < el.length; index++) {
        const url = await el[index]?.getProperty("href");
        const uri = await url?.jsonValue();
        arreglo.push(uri);
        if (index === el.length - 1) {
          if (arreglo === arreglo2) {
            arreglo = [];
            return arreglo2;
          } else {
            arreglo2 = arreglo;
            return arreglo;
          }
        }
      }
    } else {
      return false;
    }
  } catch (e) {
    const el = await page.$x(
      '//a[@class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq xdj266r x11i5rnm xat24cr x1mh8g0r x889kno x1iji9kk x1a8lsjc x1sln4lm"]'
    );

    if (el && el.length > 0) {
      for (let index = 0; index < el.length; index++) {
        const url = await el[index]?.getProperty("href");
        const uri = await url?.jsonValue();
        arreglo.push(uri);
        if (index === el.length - 1) {
          if (arreglo === arreglo2) {
            arreglo = [];
            return arreglo2;
          } else {
            arreglo2 = arreglo;
            return arreglo;
          }
        }
      }
    } else {
      return false;
    }
  }
};


export const Enviar = async (
  Uris: Uris,
  page: Page,
  _id: string,
  usuario: string
):Promise<string|any> => {
  const res = await axios.put(`${process.env.PORT}/uris`, {
    uris: Uris,
    _id,
    usuario,
  });

  const { Position, resStrin, residentificador }: any | Residentificador =
    res.data;
   if (Position.position ) {
   try{
      // TODO: consultas de urls
    console.log("funcion envia: posision",Position.position );
    for (let index = 0; index < Position.position; ) {
     const res = await axios.post(`${port}/urisUrl`, { uri: Uris[index] });
     
 
      if (res.data._id) {
        await Rebisarchat(page,Uris[index]);
        index++;
      } else {
        await SavePost([Uris[index]],page,usuario,_id,);
        index++;
      }
    }
    return 'envia';
   } catch (e){
     console.log(e);
     
   }
    
  } else if (resStrin) {
    // TODO: Aprobado
    // TODO: crea datos nuevos con los datos no encontrados []
    await SavePost(Uris, page, usuario, _id);
    
    return 'envia';
    // TODO: Aprobado
  } else if (residentificador) {
    // TODO: evalua si concuerda con los datos guardados
    await SearchChat(residentificador, page);
    
    return 'envia';
  } else {
    // TODO: no exixte
    await createChat(Uris, page, usuario, _id);
    console.log("yo", res.data);
    return 'envia';
  }
};

export const Rebisarchat = async (page: Page, Url: string): Promise<any> => {
  // TODO: id de personas: url

  try {
    const uris = page.url();
    if (Url !== uris) {
      await page.goto(Url);
      await settimeo(10 * 1000);
    }

    const el = await page.$x('//div[@class="__fb-light-mode x1n2onr6"]');
    if (el && el.length > 0) {
      const textChat = await el[el.length - 1].getProperty("textContent");

      const read = await textChat.jsonValue();
      // TODO: consulta ala base de datos
      await getturl(read, Url);
      return "echo: 152"
    } else {
      return "no se encontro marketplace.ts:154";
    }
  } catch (e) {
    console.log("id de personas: url.... file: marketplace ", e);
  }
};

const getturl = async (
  read: string | null,
  uriss: string,
): Promise<any> => {
  if (mensageChat !== read) {
   // const res = await axios.post(`${port}/urisUrl`, { uri: uriss });
   // const datos: Residentificador = res.data;
    if (read) {
      //const msg = datos.conversacion[datos.conversacion.length - 1].conversacion;
      const readmsg = read.toLocaleLowerCase();
      if (readmsg.includes("respondiste") || readmsg.includes("enviaste")) {
         console.log(`eres tu`);
         mensageChat = read;
      return "si";
      } else {
        socket.emit('chatMsg',{msg: readmsg,identificador: uriss })
        mensageChat = read;
      }
    }
  }
};

