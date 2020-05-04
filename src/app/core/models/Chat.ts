import { Mensaje } from "./Mensaje";

export interface Chat {
  idChat: number;
  nombre: string;
  descripcion: string;
  mensajes: Mensaje[];
}
