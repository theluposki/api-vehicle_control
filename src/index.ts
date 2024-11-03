import { createServer } from "node:http";
import { app } from "./app.ts";
import config from "./config.ts";
import colors from "@colors/colors";
// import { setupDatabase } from "./database/index.js";

// setupDatabase();
const server = createServer(app);

server.listen(config.port, () => {
  console.log(
    `[${colors.green("APP")}] ${colors.magenta(
      "🚀 running at"
    )} ${colors.underline("http://localhost:" + config.port)} 🔗`
  );
});
