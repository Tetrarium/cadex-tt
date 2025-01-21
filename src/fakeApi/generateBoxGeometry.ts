import { Box } from "@/models/models";

export function generateBoxGeometry(box: Box) {
  const { height: H, width: W, length: L } = box;

  const vertices = [
    0, 0, 0,
    L, 0, 0,
    L, W, 0,
    0, W, 0,
    0, 0, H,
    L, 0, H,
    L, W, H,
    0, W, H,
  ];

  const indices = [
    0, 2, 1,
    0, 3, 2,
    4, 5, 6,
    4, 6, 7,
    0, 1, 5,
    0, 5, 4,
    2, 3, 7,
    2, 7, 6,
    0, 7, 3,
    0, 4, 7,
    1, 2, 6,
    1, 6, 5,
  ];

  return { vertices, indices };
}