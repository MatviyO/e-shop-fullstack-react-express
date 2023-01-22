import express from "express";
import dotenv from "dotenv"
import { dirname, resolve} from "path";
import { fileURLToPath } from "url";
import sequelize from "./db.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../environment/.dev.env') });
const PORT = process.env.PORT || 5000;

const app = express();
const startServer = async (): Promise<void> => {
  try {
    await sequelize.authorization();
    app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`))
  } catch (e) {
    console.log(`Error Server: ${e}`)
  }
}
startServer();


