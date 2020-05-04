import { Chat } from "./../../../../core/models/Chat";
import { Component, OnInit } from "@angular/core";
import { Mensaje } from "./../../../../core/models/Mensaje";

@Component({
  selector: "app-material-chat",
  templateUrl: "./material-chat.component.html",
  styleUrls: ["./material-chat.component.sass"],
})
export class MaterialChatComponent implements OnInit {
  displayedColumns: string[] = ["nro", "usuario", "mensaje"];
  chat: Chat = {
    idChat: 1,
    nombre: "chat de la leccion",
    descripcion: "Chat de consultas",
    mensajes: [
      {
        idMensaje: 1,
        usuario: "alumno 1",
        contenido: "Consulta de prueba",
      },
      {
        idMensaje: 2,
        usuario: "alumno 2",
        contenido: "respuesta de la consulta de arriba",
      },
    ],
  };
  mensajes: Mensaje[] = this.chat.mensajes;

  constructor() {}

  ngOnInit(): void {}
}
