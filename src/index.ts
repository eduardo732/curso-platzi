import express, { NextFunction, Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello World" });
});

//Manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send("Something went wrong");
});

//la aplicacion escucha en el puerto 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

