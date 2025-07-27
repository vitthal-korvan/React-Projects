import "./index.css";
import Mainroute from "./routes/Mainroute";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="background">
      <Navbar />
      <Mainroute />
    </div>
  );
};

export default App;
