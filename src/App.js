import "./App.css";
import Jubotron from "./components/Jubotron";
import Wrapper from "./components/Wrapper";
import Alert from "./components/Alert";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Jubotron />
      <Wrapper />
      <Alert />
    </div>
  );
}

export default App;
