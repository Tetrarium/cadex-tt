import { useState } from "react";

import { Canvas } from "@react-three/fiber";

import s from "./scene.module.sass";

const minMax = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const Scene = () => {
  const [intensity, setIntensity] = useState(0);
  const [scale, setScale] = useState(1);

  const [boxPosition, setBoxPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const [boxColor, setBoxColor] = useState(0xff0000);
  const [ambientColor, setAmbientColor] = useState(0xffffff);

  const [dragging, setDragging] = useState(false);
  const [rotating, setRotating] = useState(false);

  return (
    <div className={s.container}>
      <div>
        <div className={s.intensity}>
          <span>Intencity: {intensity.toFixed(2)}</span>
          <input
            className={s.slider}
            type="range"
            min="-1"
            max="1"
            step="0.01"
            value={intensity}
            onChange={e => setIntensity(Number(e.target.value))}
          />
        </div>
        <div>Scale: {Math.round(scale * 100)} %</div>
      </div>
      <div className={s.controls}>
        <h3>Colors</h3>
        <div className={s.controls__row}>
          <span>Box color</span>
          <input type="color" value={`#${boxColor.toString(16)}`} onChange={e => setBoxColor(Number(`0x${e.target.value.slice(1)}`))} />
        </div>
        <div className={s.controls__row}>
          <span>Ambient color</span>
          <input type="color" value={`#${ambientColor.toString(16)}`} onChange={e => setAmbientColor(Number(`0x${e.target.value.slice(1)}`))} />
        </div>
      </div>
      <div className={s.controls}>
        <h3>Box position</h3>
        <div className={s.controls__row}>
          <span>X: {boxPosition[0].toFixed(2)}</span>
          <input
            className={s.slider}
            type="range"
            min="-1"
            max="1"
            step="0.01"
            value={boxPosition[0]}
            onChange={e => setBoxPosition(prev => [Number(e.target.value), prev[1], prev[2]])}
          />
        </div><div className={s.controls__row}>
          <span>Y: {boxPosition[1].toFixed(2)}</span>
          <input
            className={s.slider}
            type="range"
            min="-1"
            max="1"
            step="0.01"
            value={boxPosition[1]}
            onChange={e => setBoxPosition(prev => [prev[0], Number(e.target.value), prev[2]])}
          />
        </div><div className={s.controls__row}>
          <span>Z: {boxPosition[2].toFixed(2)}</span>
          <input
            className={s.slider}
            type="range"
            min="-1"
            max="1"
            step="0.01"
            value={boxPosition[2]}
            onChange={e => setBoxPosition(prev => [prev[0], prev[1], Number(e.target.value)])}
          />
        </div>
      </div>
      <div className={s.controls}>
        <h3>Rotation</h3>
        <div className={s.controls__row}>
          <span>X: {rotation[0].toFixed(2)}</span>
          <input
            className={s.slider}
            type="range"
            min={Math.PI * -1}
            max={Math.PI}
            step="0.01"
            value={rotation[0]}
            onChange={e => setRotation(prev => [Number(e.target.value), prev[1], prev[2]])}
          />
        </div><div className={s.controls__row}>
          <span>Y: {rotation[1].toFixed(2)}</span>
          <input
            className={s.slider}
            type="range"
            min={Math.PI * -1}
            max={Math.PI}
            step="0.01"
            value={rotation[1]}
            onChange={e => setRotation(prev => [prev[0], Number(e.target.value), prev[2]])}
          />
        </div><div className={s.controls__row}>
          <span>Z: {rotation[2].toFixed(2)}</span>
          <input
            className={s.slider}
            type="range"
            min={Math.PI * -1}
            max={Math.PI}
            step="0.01"
            value={rotation[2]}
            onChange={e => setRotation(prev => [prev[0], prev[1], Number(e.target.value)])}
          />
        </div>
      </div>
      <Canvas
        onWheel={e => setScale(prev => {
          const newScale = prev + (-e.deltaY / 100 * 0.05);

          return minMax(newScale, 0.1, 5);
        })}

        onPointerDown={e => {
          if (e.button === 0) {
            setDragging(true);
          }

          if (e.button === 1) {
            setRotating(true);
          }
        }}
        onPointerUp={e => {
          if (e.button === 0) {
            setDragging(false);
          }

          if (e.button === 1) {
            setRotating(false);
          }
        }}
        onPointerMove={e => {
          if (dragging) {
            setBoxPosition(prev => [prev[0] + e.movementX / 100, prev[1] - e.movementY / 100, prev[2]]);
          }

          if (rotating) {
            setRotation(prev => [prev[0] + e.movementY / 100, prev[1] + e.movementX / 100, prev[2]]);
          }
        }}


        className={s.canvas}
      >
        <ambientLight intensity={intensity} color={ambientColor} />
        <mesh scale={scale} userData={{ name: "box" }} position={boxPosition} rotation={rotation}>
          <directionalLight color={boxColor} position={[1, 2, 3]} />
          <boxGeometry args={[1, 1, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Scene;;