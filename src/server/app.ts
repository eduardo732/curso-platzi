import ExpressServer from "./express-server";
import routesApi from "../routes";

class App {
  private server: ExpressServer;

  constructor(host: string, port: number) {
    this.server = new ExpressServer(host, port);
  }

  async start(): Promise<void> {
    try {
      await this.server.listen();
      routesApi(this.server.getExpress());
    } catch (error) {
      console.error("Error al iniciar la aplicación:", error);
      process.exit(1);
    }
  }
}

export default App;

