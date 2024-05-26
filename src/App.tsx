import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-dvh flex flex-col items-center justify-center gap-3 text-center">
      <div className="p-6">
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 animate-[spin_2s_ease-in-out_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-6xl font-bold my-8">Vite + React</h1>
      <div className="p-8">
        <Button variant="secondary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p className="m-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#999999]">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
