import { useState, useCallback, useEffect , useRef } from "react";
import "./App.css";

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) characters += "0123456789";
    if (charAllowed) characters += "~!@#$%^&*(){}+_*-";

    let pass = "";
    for (let i = 0; i < passwordLength; i++) {
      const index = Math.floor(Math.random() * characters.length);
      pass += characters.charAt(index);
    }

    setPassword(pass);
  }, [passwordLength, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, numberAllowed, charAllowed, passwordGenerator]);

  // const copyToClipboard = () => {
  //   window.navigator.clipboard.writeText(password);
  //   alert("Password copied to clipboard!");
  // };

  const copyToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)

  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-black bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 shrink-0"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-y-2 text-sm">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={passwordLength}
            className="cursor-pointer"
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
          <label>Length: {passwordLength}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
