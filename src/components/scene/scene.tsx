import React, { FC, PointerEvent, useState } from "react";
import { BufferGeometry, Float32BufferAttribute } from "three";

import { Canvas } from "@react-three/fiber";

import s from "./scene.module.sass";

export interface BoxProps {
  indices: number[],
  vertices: number[],
}

type Position = {
  position?: [number, number, number];
  rotation?: [number, number, number];
};

const TriangulatedCube: FC<BoxProps & Position> = ({
  indices,
  vertices,
  position = [0, 0, -5],
  rotation = [.4, 0.9, 0],
}) => {


  const geometry = React.useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute("position", new Float32BufferAttribute(vertices, 3));

    geo.setIndex(indices);

    geo.computeVertexNormals();

    return geo;
  }, [indices, vertices]);

  return (
    <>
      <mesh geometry={geometry} rotation={rotation} position={position}>
        <meshStandardMaterial color={0xff0000} wireframe={false} />
      </mesh>
      <mesh geometry={geometry} rotation={rotation} position={position}>
        <meshStandardMaterial color={0x00ff00} wireframe={true} />
      </mesh>
    </>
  );
};

const Scene: FC<Partial<BoxProps>> = ({ indices, vertices }) => {
  const [boxPosition, setBoxPosition] = useState<[number, number, number]>([0, 0, -5]);
  const [isDragging, setIsDragging] = useState(false);

  const [boxRotation, setBoxRotation] = useState<[number, number, number]>([.4, 0.9, 0]);
  const [isRotating, setIsRotating] = useState(false);

  const handlePointerDown = (evt: PointerEvent<HTMLDivElement>) => {
    if (evt.button === 0) {
      setIsDragging(true);
    }

    if (evt.button === 1) {
      setIsRotating(true);
    }
  };

  const handlePointerUp = (evt: PointerEvent<HTMLDivElement>) => {
    if (evt.button === 0) {
      setIsDragging(false);
    }

    if (evt.button === 1) {
      setIsRotating(false);
    }
  };

  const handlePointerMove = (evt: PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setBoxPosition(prev => (
        [
          prev[0] + evt.movementX / 100,
          prev[1] - evt.movementY / 100,
          prev[2],
        ]
      ));
    }

    if (isRotating) {
      setBoxRotation(prev => (
        [
          prev[0] + evt.movementY / 100,
          prev[1] + evt.movementX / 100,
          prev[2],
        ]
      ));
    }
  };

  return (
    <div className={s.container}>
      {indices && vertices &&
        <>
          <div className={s.tip}>
            <div>Moving: press left mouse button and move</div>
            <div>Rotation: press wheel and move</div>
          </div>
          <Canvas
            className={s.canvas}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            camera={{ position: [0, 0, 5], fov: 75 }}
          >
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <TriangulatedCube
              indices={indices}
              vertices={vertices}
              position={boxPosition}
              rotation={boxRotation}
            />
          </Canvas>
        </>
      }
    </div>
  );
};

export default Scene;