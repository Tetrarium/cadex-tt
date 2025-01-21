import React from "react";
import { BufferGeometry, Float32BufferAttribute } from "three";

import { Canvas } from "@react-three/fiber";

const vertices = [
  0, 0, 0,
  1, 0, 0,
  1, 1, 0,
  0, 1, 0,
  0, 0, 1,
  1, 0, 1,
  1, 1, 1,
  0, 1, 1
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

const TriangulatedCube = () => {


  const geometry = React.useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute("position", new Float32BufferAttribute(vertices, 3));

    geo.setIndex(indices);

    geo.computeVertexNormals();

    return geo;
  }, []);

  const rotation = React.useMemo((): [number, number, number] => [.4, 0.9, 0], []);

  return (
    <>
      <mesh geometry={geometry} rotation={rotation} position={[0, 0, -5]}>
        <meshStandardMaterial color={0xff0000} wireframe={false} />
      </mesh>
      <mesh geometry={geometry} rotation={rotation} position={[0, 0, -5]}>
        <meshStandardMaterial color={0x00ff00} wireframe={true} />
      </mesh>
    </>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
      <TriangulatedCube />
    </Canvas>
  );
};

export default Scene;