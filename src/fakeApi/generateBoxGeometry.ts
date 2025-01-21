import { Box } from "@/models/models";

const DIVIDER = 2 * 100;
export function generateBoxGeometry(box: Box) {
  const { height, width, length } = box;

  const H = height / DIVIDER;
  const W = width / DIVIDER;
  const L = length / DIVIDER;

  const vertices = [
    -L, -W, -H,
    L, -W, -H,
    L, W, -H,
    -L, W, -H,
    -L, -W, H,
    L, -W, H,
    L, W, H,
    -L, W, H,
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