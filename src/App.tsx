import "./App.css";
import ClassComponent from "./components/ClassComponent";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <ClassComponent title="Articolo" color="blue" />
    </>
  );
}

export default App;
