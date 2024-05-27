import { OrbitControls, Stage } from "@react-three/drei";
import { Sample } from "./Sample";

export const Element = () => {
  return (
    <>
      <OrbitControls />
      <Stage
        intensity={1.5} // intensitas cahay, brp terang
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 2,
          opacity: 1.2, // opacity shadow
        }}
        environment="city" // pencahayaan seperti di kota
        adjustCamera={3} // jarak dgn camera
      >
        {/* <mesh castShadow>
          <meshNormalMaterial />
          <boxBufferGeometry />
        </mesh> */}

        <Sample />
      </Stage>
    </>
  );
};
