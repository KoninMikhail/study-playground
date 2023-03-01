import './App.css';
import Filter from "./components/Filter";
import {demoData} from "./data/data";

function App() {
  return (
    <div className="App">
      <Filter data={demoData}/>
    </div>
  )
}

export default App
