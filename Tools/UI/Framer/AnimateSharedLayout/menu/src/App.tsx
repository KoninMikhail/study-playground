import './App.css';
import Menu from "./components/Menu";

const data = ['Short', 'Veeeerrryy Looooooong item', 'Normal item']

function App() {
  return (
    <div className="App">
      <Menu items={ data}/>
    </div>
  )
}

export default App
