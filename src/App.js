import { MyIp } from "./components/MyIp";
import "./App.css";
import { MyMap } from "./components/MyMap";
import { Countries } from "./components/Countries";

export function App() {
  return (
    <div className="App">
      <MyMap />
      <Countries />
      <MyIp />
    </div>
  );
}
