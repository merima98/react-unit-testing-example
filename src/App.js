import "./App.css";
import Wrapper from "./components/Wrapper.tsx";
import Jubotron from "./components/Jubotron";
import Row from "./components/Row";
import TitleHeader from "./components/TitleHeader";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Jubotron />
      <Wrapper />
      <Button />
    </div>
  );
}

export default App;
