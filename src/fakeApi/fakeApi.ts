import { createServer } from "miragejs";

import { Box } from "@/models/models";

function getRandomTiming(from: number, to: number) {
  return Math.floor(Math.random() * (to - from) + from);
}

export function makeServer() {
  console.log('mirage server is running');
  const server = createServer({
    routes() {
      this.get("/api/box", (_schema, request) => {
        const params = request.queryParams as unknown as Box;
        console.log(params);

        return params;
      }, {
        timing: getRandomTiming(300, 3000),
      });
    }
  });

  return server;
}