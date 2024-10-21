import * as http from "http";
import express from "express";
import { injectable } from "tsyringe";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import errorHandler from "../middleware/error-handler.middleware";
import notFoundHandler from "../middleware/not-found-handler.middleware";
import Express from "./server.interface";

@injectable()
class ExpressServer implements Express {
	private express: express.Express;
	private httpServer?: http.Server;
	private host: string;
	private port: number;

	constructor(host: string, port: number) {
		this.host = host;
		this.port = port;
		this.express = express();
		this.setupMiddleware();
	}

	private setupMiddleware(): void {
		// Middleware para parsear JSON
		this.express.use(express.json());

		// Middleware para parsear datos de formularios
		this.express.use(express.urlencoded({ extended: true }));

		// Middleware para habilitar CORS
		this.express.use(cors());

		// Middleware para mejorar la seguridad
		this.express.use(helmet());

		// Middleware para logging
		this.express.use(morgan("dev"));

		// Aquí irían tus rutas
		// this.express.use("/api", apiRoutes);

		// Middleware para manejar rutas no encontradas
		this.express.use(notFoundHandler);
		// Middleware para manejar errores
		this.express.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
			errorHandler(err, req, res, next);
		});
	}

	initialize(host: string, port: number): void {
		this.host = host;
		this.port = port;
	}

	getExpress(): express.Express {
		return this.express;
	}

	async listen(): Promise<void> {
		return new Promise((resolve) => {
			this.httpServer = this.express.listen(this.port, this.host, () => {
				console.log(`Servidor ejecutándose en el puerto ${this.port}`);
				resolve();
			});
		});
	}

	async stop(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.httpServer) {
				this.httpServer.close((error) => {
					if (error) {
						reject(error);
					} else {
						resolve();
					}
				});
			} else {
				reject(new Error("El servidor no está en ejecución"));
			}
		});
	}

	use(path: string, router: express.Router): void {
		this.express.use(path, router);
	}
}

export default ExpressServer;
