import { createServer } from "http";
import api from "./api";

const server = createServer(api);
const PORT = process.env.PORT || 3101;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
