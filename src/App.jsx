import "./App.css";
import Home from "./components/Home/Home";
import MainHeader from "./components/Header/MainHeader";

function App() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <MainHeader></MainHeader>
      <div className="mt-6">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
