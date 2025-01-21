import { createServer, Response } from "miragejs";

import { Box } from "@/models/models";

import { generateBoxGeometry } from "./generateBoxGeometry";

function getRandomTiming(from: number, to: number) {
  return Math.floor(Math.random() * (to - from) + from);
}

export function makeServer() {
  console.log('mirage server is running');
  const server = createServer({
    routes() {
      this.get("/api/box", (_schema, request) => {
        const params = request.queryParams as unknown as Box;

        if (!params.height || !params.width || !params.length) {
          return new Response(400, {}, { error: "Invalid box parameters" });
        }

        const geometry = generateBoxGeometry(params);

        return geometry;
      }, {
        timing: getRandomTiming(300, 3000),
      });
    }
  });

  return server;
}