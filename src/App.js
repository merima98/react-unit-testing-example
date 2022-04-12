import "./App.css";
import Jubotron from "./components/Jubotron";
import TitleHeader from "./components/TitleHeader";

function App() {
  return (
    <div>
      <Jubotron>
        <TitleHeader
          className="text-center"
          title="React Form - unit testing"
        />
      </Jubotron>
    </div>
  );
}

export default App;
