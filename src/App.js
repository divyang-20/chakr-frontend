import "./App.css";
import LeftView from "./components/Main/LeftView";
import RightView from "./components/Main/RightView";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <LeftView />
      <RightView />
    </div>
  );
}

export default App;
