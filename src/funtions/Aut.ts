import { Page,WaitTimeoutOptions } from "puppeteer";


// TODO: autenticate
export const autenticate = async (page: Page, name:string,password: string) => {
  try {
    const userName = await page.$x('//input[@name="email"]');

    if (userName.length > 0) {
      await userName[0].focus();
      await page.keyboard.type(name);
    }
    const pass = await page.$x('//input[@name="pass"]');
    if (pass.length > 0) {
      await pass[0].focus();
      await page.keyboard.type(password);
    }

    await page.click('button[type="submit"]');
    
  } catch (e) {
    console.log("autenticate: ", e);
  }
};

// TODO: esto es la funcion de espera
export function settimeo(ms:number):Promise<WaitTimeoutOptions>{
  return new Promise((res)=> setTimeout(res, ms))
  
}
