import React, { FC } from "react";
import { BufferGeometry, Float32BufferAttribute } from "three";

import { Canvas } from "@react-three/fiber";

import s from "./scene.module.sass";

export interface BoxProps {
  indices: number[],
  vertices: number[],
}

const TriangulatedCube: FC<BoxProps> = ({ indices, vertices }) => {


  const geometry = React.useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute("position", new Float32BufferAttribute(vertices, 3));

    geo.setIndex(indices);

    geo.computeVertexNormals();

    return geo;
  }, [indices, vertices]);

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

const Scene: FC<Partial<BoxProps>> = ({ indices, vertices }) => {
  return (
    <div className={s.container}>
      {indices && vertices &&
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} >
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <TriangulatedCube indices={indices} vertices={vertices} />
        </Canvas>
      }
    </div>
  );
};

export default Scene;