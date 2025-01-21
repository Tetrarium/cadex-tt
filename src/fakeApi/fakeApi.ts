import { createServer, Response } from "miragejs";

import { generateBoxGeometry } from "./generateBoxGeometry";
import { RequestBox } from "./models";

function getRandomTiming(from: number, to: number) {
  return Math.floor(Math.random() * (to - from) + from);
}

export function makeServer() {
  console.log('mirage server is running');
  const server = createServer({
    routes() {
      this.get("/api/box", (_schema, request) => {
        const params = request.queryParams as unknown as RequestBox;
        console.log(params);
        const height = Number(params.height);
        const width = Number(params.width);
        const length = Number(params.length);

        if (!height || !width || !length) {
          return new Response(400, {}, { error: "Invalid box parameters" });
        }

        const geometry = generateBoxGeometry({ height, width, length });

        return geometry;
      }, {
        timing: getRandomTiming(300, 3000),
      });
    }
  });

  return server;
}