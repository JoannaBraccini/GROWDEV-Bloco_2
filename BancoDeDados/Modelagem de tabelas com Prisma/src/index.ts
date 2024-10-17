import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { repository } from "./repository.prisma";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Controle, API Prisma 🚀" });
});

app.get("/users", async (req: Request, res: Response) => {
  const user = await repository.user.findMany({
    orderBy: { name: "asc" },
  });
  res.status(200).json({ ok: true, message: "Usuários listados", data: user });
});

// app.get("/users", async (req: Request, res: Response) => {
//   const user = await repository.user.findMany({
//     where: {
//       name: {
//         contains: "C",
//       },
//     },
//   });
//   res.status(200).json({ ok: true, message: "Usuários listados", data: user });
// });

// app.get("/users", async (req: Request, res: Response) => {
//   const user = await repository.user.findFirst({
//     where: { name: "Cliente" },
//   });
//   res.status(200).json({ ok: true, message: "Usuários listados", data: user });
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
