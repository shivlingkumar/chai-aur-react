import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center
       bottom-12 inset-x- 0 px-2">
        <div className="flex flex-wrap justify-center
         gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 rounded-full text-white shadowlg "
          style={{backgroundColor: "red"}}>Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 rounded-full text-white shadowlg "
          style={{backgroundColor: "green"}}>Greem</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 rounded-full text-white shadowlg "
          style={{backgroundColor: "blue"}}>Blue</button>
         </div>

      </div>
      

    </div>
  );
}

export default App;
