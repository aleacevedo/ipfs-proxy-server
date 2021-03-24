import app from "./app";
import { SERVER_PORT } from "./config";

app.listen({ port: SERVER_PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${SERVER_PORT}`)
);
