import { Canvas } from "@react-three/fiber";
import { Element } from "./compoenents/Element";

function App() {
  return (
    <Canvas shadows>
      <Element />
    </Canvas>
  );
}

export default App;
