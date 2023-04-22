import 'dotenv/config'
import { run } from "./app";
import { socket } from "./funtions/socket";
import puppeteer, { Page, WaitForSelectorOptions} from "puppeteer";
import axios from 'axios';

interface Dt {
  _id: string;
  email:  string;
  password: string;
  cuentas: User[];
  palabras: [],
  createdAt:  string;
  updatedAt:  string;
}
interface User {
  email:  string;
  password: string;
}

const port = process.env.PORT ? process.env.PORT : 'http://localhost:5000';
let acount: number = 0;
(() => {
    async function onConnect() {
          //socket.emit('id',{id: socket.id, acount})
          console.log(process.env.PORT,socket.id);
          const res = await axios.post(`${port}/users`,{email:'moisespaca@gmail.com',password:'8296891911'});
          const r:Dt =  res.data;
          console.log(r)
          if (r._id) {
            await run(puppeteer,'nu0126425@gmail.com','moises.,809',r._id)
            
          } else {
            console.log(r);
            
          }
    }
  //'64226f2ae9f53791d9ea1a2a' { email: 'nu0126425@gmail.com', password: 'moises.,809' }
    function onDisconnect() {
      console.log(false,'este servidor no esta connectado a internet o tiene un problema');
    }
  
    function onFooEvent(value: any) {
      console.log((previous: any) => [...previous, value]);
    }
  
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);
  })()
