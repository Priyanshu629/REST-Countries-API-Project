import "./App.css";
import Home from "./pages/home";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="app">
      <Home />
      <Toaster/>
    </div>
  );
}

export default App;
