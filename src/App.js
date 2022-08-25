import { useState } from "react";
import Bulb from "./components/Bulb";
import "./styles.css";

function App() {
  const [isBulbOn, setIsBulbOn] = useState(false);

  const toggleIsOn = () => setIsBulbOn(!isBulbOn);

  return (
    <div className="App">
      <Bulb isBulbOn={isBulbOn} toggleIsOn={toggleIsOn} />
      <Bulb isBulbOn={isBulbOn} toggleIsOn={toggleIsOn} />
      <Bulb isBulbOn={isBulbOn} toggleIsOn={toggleIsOn} />
      <Bulb isBulbOn={isBulbOn} toggleIsOn={toggleIsOn} />
    </div>
  );
}

export default App;
