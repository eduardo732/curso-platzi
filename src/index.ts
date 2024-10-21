import "reflect-metadata";
import "./config/di-container";  // Importamos la configuración del contenedor
import App from "./server/app";

const HOST: string = process.env.HOST || "localhost";
const PORT: number = Number(process.env.PORT) || 3000;

const app = new App(HOST, PORT);
app.start();
